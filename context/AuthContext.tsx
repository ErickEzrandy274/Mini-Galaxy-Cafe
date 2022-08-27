import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	setPersistence,
	browserSessionPersistence,
	onIdTokenChanged,
} from "firebase/auth";
import { MainLayoutProps } from "../components/modules/MainLayout/interface";
import { auth } from "../components/utils/firebase/firebase";
import { extractError } from "../components/utils/function/function";
import nookies from "nookies";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [user, setUser] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [userStuff, setUserStuff] = useState<any[]>([]);

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

	const register = async (
		email: string,
		password: string,
		displayName: string
	) => {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		return await updateProfile(res.user, { displayName });
	};

	const login = async (email: string, password: string) => {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, password);
			})
			.catch((err: any) => {
				setError(extractError(err));
			});
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				error,
				setError,
				userStuff,
				setUserStuff,
			}}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
