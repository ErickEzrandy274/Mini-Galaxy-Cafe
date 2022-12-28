export interface IconProps {
	handler: (e: any, isGoogle: boolean) => Promise<void>;
	width?: number;
	height?: number;
	isGoogle?: boolean;
}
