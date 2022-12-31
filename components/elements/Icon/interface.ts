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
