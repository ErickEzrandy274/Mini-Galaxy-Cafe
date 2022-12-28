export interface IconProps {
	handler: (
		e: any,
		provider: "Google" | "Facebook" | "Github"
	) => Promise<void>;
	width?: number;
	height?: number;
	provider: "Google" | "Facebook" | "Github";
}
