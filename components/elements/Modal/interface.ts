import { SetStateAction } from "react";
import { BuyerProduct } from "../Card/interface";

export interface CheckoutModalProps {
    type: "Checkout" | "Payment"
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
    productList?: BuyerProduct[]
    handlePayment?: () => void
}