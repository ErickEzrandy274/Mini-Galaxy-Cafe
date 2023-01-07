import { SetStateAction } from "react";
import {
	BuyerProduct,
	ExtendsProductCardTypes,
	DestinationType,
} from "@elements";

export interface CheckoutModalProps {
	modalType: DestinationType;
	setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
	productList?: BuyerProduct[];
	handleAction?: () => void;
}

export interface ModalWrapperProps {
	modalBtnType: ExtendsProductCardTypes;
	to: DestinationType;
	productList?: BuyerProduct[];
	handleAction?: () => void;
	modalType: DestinationType;
}
