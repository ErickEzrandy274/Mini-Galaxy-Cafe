import { SetStateAction } from "react";
import { BuyerProduct, ExtendsProductCardTypes } from "../Card/interface";
import { DestinationType } from "../Button/interface";

export interface CheckoutModalProps {
	modalType: DestinationType;
	setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
	productList?: BuyerProduct[];
	handlePayment?: () => void;
}

export interface ModalWrapperProps {
	modalBtnType: ExtendsProductCardTypes;
	to: DestinationType;
	productList?: BuyerProduct[];
	handlePayment?: () => void;
	modalType: DestinationType;
}
