import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getBuyerProduct, setProductlist } from "@utils";
import { useDispatch } from "react-redux";
import { MainLayoutProps } from "@modules";

const UserStuffContext = createContext<any>({});

export const useUserStuff = () => useContext(UserStuffContext);

export const UserStuffContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const { user } = useAuth();
	const [userStuff, setUserStuff] = useState<any[]>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			await getBuyerProduct(user?.uid).then((res) => {
				const data = res?.buyerProduct?.map((item: any) => item);
				setUserStuff(data ?? []);
				dispatch(setProductlist(data ?? []));
			});
		};

		user?.uid && fetchData();
	}, [user?.uid, dispatch]);

	return (
		<UserStuffContext.Provider
			value={{
				userStuff,
				setUserStuff,
			}}
		>
			{children}
		</UserStuffContext.Provider>
	);
};
