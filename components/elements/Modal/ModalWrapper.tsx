import React, { useState } from "react";
import { ModalWrapperProps } from "./interface";
import { CheckOutButton as ModalButton, CheckOutModal } from "@elements";

const ModalWrapper: React.FC<ModalWrapperProps> = ({
	modalBtnType,
	modalType,
	productList,
	to,
	handleAction,
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
					handleAction={handleAction}
				/>
			)}
		</div>
	);
};

export default ModalWrapper;
