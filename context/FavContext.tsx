import { DocumentData } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { getFavData } from "../components/utils";
import { useAuth } from "./AuthContext";
import { MainLayoutProps } from "../components/modules";

const FavContext = createContext({} as any);

export const FavContextProvider: React.FC<MainLayoutProps> = ({ children }) => {
	const {
		user: { uid },
	} = useAuth();

	const [favData, setFavData] = useState<DocumentData | undefined>([]);
	const [favDataSize, setFavDataSize] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			await getFavData(uid).then((res) => {
				const data = res?.listFavItem?.map((item: any) => {
					return item.name;
				});
				setFavData(data ? data : []);
				setFavDataSize(data?.length);
			});
		};

		uid && fetchData();
	}, [uid]);

	return (
		<FavContext.Provider value={{ favData, favDataSize, setFavDataSize }}>
			{children}
		</FavContext.Provider>
	);
};

export const useFavContext = () => useContext(FavContext);
