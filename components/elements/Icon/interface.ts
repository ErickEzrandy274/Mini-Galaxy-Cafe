import { BaseSyntheticEvent } from "react";

export type ProviderType = "Google" | "Facebook" | "Github";

export interface BaseIconProps {
	width?: number;
	height?: number;
}

export interface IconProps extends BaseIconProps {
	handler: (e: BaseSyntheticEvent, provider: ProviderType) => Promise<void>;
	provider: ProviderType;
}

export interface IconTrashProps extends BaseIconProps {
	onClick: () => void;
}

export interface IconFavoriteProps extends BaseIconProps {
	fav: boolean;
}