import { BuyerProduct } from "@elements";
import { DataType } from "@modules";
import React, { SetStateAction } from "react";

interface NewDataProps {
	newData: DataType;
	setNewData: React.Dispatch<SetStateAction<DataType>>;
}

export interface CheckoutTableProps extends NewDataProps {
	products: BuyerProduct[];
}

export interface BodyTableContentProps extends BuyerProduct, NewDataProps {
	delay: number;
}
