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
import nookies from "nookies";
import toast from "react-hot-toast";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [user, setUser] = useState<any>(null);
	const [error, setError] = useState<string>("");
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
		async (email: string, password: string, displayName: string) => {
			createUserWithEmailAndPassword(auth, email, password)
				.then(async (res) => {
					await updateProfile(res.user, { displayName });
					toast.success("Successfully created a new account!");
				})
				.catch((err: any) => {
					setError(extractError(err));
					toast.error(extractError(err));
				});
		},
		[]
	);

	const loginWithEmailAndPassword = useCallback(
		async (email: string, password: string) => {
			setPersistence(auth, browserSessionPersistence).then(() => {
				signInWithEmailAndPassword(auth, email, password)
					.then(() => toast.success("Successfully logged in!"))
					.catch((err: any) => {
						setError(extractError(err));
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
				signInWithPopup(auth, provider[userProvider])
					.then(() => toast.success("Successfully login!"))
					.catch((err: any) => {
						setError(extractError(err));
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
				error,
				setError,
			}}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
