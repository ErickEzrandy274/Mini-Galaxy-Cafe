import { createContext, useContext, useEffect, useState } from "react";
import { MainLayoutProps } from "../components/modules/MainLayout/interface";
import { useAuth } from "./AuthContext";
import { getBuyerProduct } from "../components/utils/function/dataManipulation";
import { useDispatch } from "react-redux";
import { set_productlist } from "../redux/dataBuyer/dataBuyerSlice";

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
				setUserStuff(data);
				dispatch(set_productlist({ obj: data ? data : [] }));
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