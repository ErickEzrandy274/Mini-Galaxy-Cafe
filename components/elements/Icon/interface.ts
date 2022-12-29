import { BaseSyntheticEvent } from "react";

export type ProviderType = "Google" | "Facebook" | "Github";

export interface IconProps {
	handler: (e: BaseSyntheticEvent, provider: ProviderType) => Promise<void>;
	width?: number;
	height?: number;
	provider: ProviderType;
}
