import { createContext, useContext, useEffect, useState } from "react";
import { MainLayoutProps } from "../components/modules/MainLayout/interface";
import { useAuth } from "./AuthContext";
import { getBuyerProduct } from "../components/utils/function/dataManipulation";

const UserStuffContext = createContext<any>({});

export const useUserStuff = () => useContext(UserStuffContext);

export const UserStuffContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const { user } = useAuth();
	const [userStuff, setUserStuff] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			await getBuyerProduct(user?.uid).then((res) => {
				const data = res?.buyerProduct?.map((item: any) => item);
				setUserStuff(data);
			});
		};

		user?.uid && fetchData();
	}, [user?.uid]);

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
