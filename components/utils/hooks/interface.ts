export interface HandleIncrementProps {
	prevNum: number;
	setNum: (value: React.SetStateAction<number>) => void;
}

export interface HandleDecrementProps extends HandleIncrementProps {
	debouncedNum: number;
	setIsModifierButtonOpen: (value: React.SetStateAction<boolean>) => void;
}
