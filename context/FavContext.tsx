import { DocumentData } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { getFavData } from "../components/utils/function/dataManipulation";
import { useAuth } from "./AuthContext";

const FavContext = createContext({} as any);

export const FavContextProvider: React.FC<any> = ({ children }) => {
	const {
		user: { uid },
	} = useAuth();

	const [favData, setFavData] = useState<DocumentData | undefined>([]);

	useEffect(() => {
		const fetchData = async () => {
			await getFavData(uid).then((res) => {
				const data = res?.listFavItem?.map((item: any) => {
					return item.name;
				});
				setFavData(data ? data : []);
			});
		};

		fetchData();
	}, []);

	return <FavContext.Provider value={{ favData }}>{children}</FavContext.Provider>;
};

export const useFavContext = () => useContext(FavContext);
