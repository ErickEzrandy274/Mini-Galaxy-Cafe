export type ProviderType = "Google" | "Facebook" | "Github";

export interface IconProps {
	handler: (e: any, provider: ProviderType) => Promise<void>;
	width?: number;
	height?: number;
	provider: ProviderType;
}
