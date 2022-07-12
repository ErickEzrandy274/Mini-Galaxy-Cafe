import React, { useState } from "react";
import ModalButton from "../Button/CheckOutButton";
import CheckOutModal from "./CheckOutModal";
import { ModalWrapperProps } from "./interface";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
	modalBtnType,
	modalType,
	productList,
	to,
	handlePayment,
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<div
			className={`flex flex-col justify-center items-center ${
				to === "Checkout" && `md:w-1/3`
			}`}
		>
			<ModalButton
				to={to}
				onClick={() => setIsModalOpen(true)}
				productList={productList}
				modalBtnType={modalBtnType}
			/>

			{isModalOpen && (
				<CheckOutModal
					modalType={modalType}
					setIsModalOpen={setIsModalOpen}
					productList={productList}
					handlePayment={handlePayment}
				/>
			)}
		</div>
	);
};

export default ModalWrapper;
