import { useRouter } from "next/router";
import { createContext, ReactNode, useContext } from "react";

interface PathContextValues {
	pathname: string;
}

const PathContext = createContext({} as PathContextValues);

export const PathContextProvider = ({ children }: { children: ReactNode }) => {
	const { pathname } = useRouter();

	const value = { pathname };

	return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
};

export const usePathContext = () => useContext(PathContext);
