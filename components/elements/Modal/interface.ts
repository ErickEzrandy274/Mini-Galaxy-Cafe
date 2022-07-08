import { SetStateAction } from "react";
import { BuyerProduct } from "../Card/interface";

export interface CheckoutModalProps {
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
	productList: BuyerProduct[]
}