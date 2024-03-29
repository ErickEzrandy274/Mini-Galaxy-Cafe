import React from "react";
import { Transition } from "@headlessui/react";
import { ToastIcon, Toaster } from "react-hot-toast";
import { IconCheckmark, IconClose } from "@elements";

const index = () => {
	return (
		<Toaster
			toastOptions={{
				duration: 4000,
				success: { icon: <IconCheckmark />, duration: 2500 },
				error: { icon: <IconClose />, duration: 3000 },
			}}
		>
			{(t) => {
				const backgroundColor =
					t.type === "error"
						? "bg-red-500"
						: t.type === "success"
						? "bg-green-500"
						: "bg-gray-500";

				return (
					<Transition
						appear
						show={t.visible}
						className={`transform -mt-2.5 p-3 px-5 flex items-center gap-3 rounded-lg shadow-lg md:text-lg text-white font-semibold ${backgroundColor} tracking-wide`}
						enter="transition-all duration-700"
						enterFrom="opacity-0 ease-out scale-25"
						enterTo="opacity-100 ease-in scale-100"
						leave="transition-all duration-1000"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-75"
					>
						<ToastIcon toast={t} />
						<p>{t.message?.toString()}</p>
					</Transition>
				);
			}}
		</Toaster>
	);
};

export default index;
