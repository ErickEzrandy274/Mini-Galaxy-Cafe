import { SetStateAction } from "react";
import { BuyerProduct } from "../Card/interface";

export interface CheckoutModalProps {
    modalType: "Checkout" | "Payment"
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
    productList?: BuyerProduct[]
    handlePayment?: () => void
}

export interface ModalWrapperProps {
    modalBtnType: "Foods" | "Beverages" | "Snacks" | "Others"
	to: "Checkout" | "Payment"
    productList?: BuyerProduct[]
    handlePayment?: () => void
    modalType: "Checkout" | "Payment"
}