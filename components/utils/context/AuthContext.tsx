import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
	setPersistence,
	browserSessionPersistence,
	onIdTokenChanged,
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
} from "firebase/auth";
import { auth, extractError } from "@utils";
import { ProviderType } from "@elements";
import { MainLayoutProps } from "@modules";
import { LoginProps, RegisterProps } from "./interface";
import nookies from "nookies";
import toast from "react-hot-toast";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [user, setUser] = useState<any>(null);
	const [errorAuth, setErrorAuth] = useState<string>("");
	const [loading, setLoading] = useState(true);
	const provider = useMemo(() => {
		return {
			Google: new GoogleAuthProvider(),
			Facebook: new FacebookAuthProvider(),
			Github: new GithubAuthProvider(),
		};
	}, []);

	useEffect(() => {
		const unsubscribe = onIdTokenChanged(auth, async (user) => {
			if (user) {
				const { uid, email, displayName, refreshToken: token } = user;

				setUser({
					uid,
					email,
					displayName,
					token,
				});

				nookies.set(null, "userId", uid);
			} else {
				setUser(null);
				nookies.destroy(null, "userId");
			}

			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const register = useCallback(
		async ({ email, password, nickname: displayName }: RegisterProps) => {
			toast.loading("Processing your register...");
			createUserWithEmailAndPassword(auth, email, password)
				.then(async (res) => {
					await updateProfile(res.user, { displayName });
					toast.dismiss();
					toast.success("Successfully created a new account!");
				})
				.catch((err: any) => {
					toast.dismiss();
					setErrorAuth(extractError(err));
					toast.error(extractError(err));
				});
		},
		[]
	);

	const loginWithEmailAndPassword = useCallback(
		async ({ email, password }: LoginProps) => {
			toast.loading("Processing your login...");
			setPersistence(auth, browserSessionPersistence).then(() => {
				signInWithEmailAndPassword(auth, email, password)
					.then(() => {
						toast.dismiss();
						toast.success("Successfully logged in!");
					})
					.catch((err: any) => {
						toast.dismiss();
						setErrorAuth(extractError(err));
						toast.error(extractError(err));
					});
			});
		},
		[]
	);

	const loginWithOtherProviders = useCallback(
		async (userProvider: ProviderType) => {
			// reference OAuth using facebook: https://www.youtube.com/watch?v=kEfe9u5F_L0

			setPersistence(auth, browserSessionPersistence).then(() => {
				toast.loading("Processing your login...");
				signInWithPopup(auth, provider[userProvider])
					.then(() => {
						toast.dismiss();
						toast.success("Successfully login!");
					})
					.catch((err: any) => {
						toast.dismiss();
						setErrorAuth(extractError(err));
						toast.error(extractError(err));
					});
			});
		},
		[provider]
	);

	const logout = useCallback(async () => {
		setUser(null);
		await signOut(auth);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				loginWithEmailAndPassword,
				loginWithOtherProviders,
				register,
				logout,
				errorAuth,
				setErrorAuth,
			}}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
