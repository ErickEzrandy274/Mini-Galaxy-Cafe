import React from "react";
import { Transition } from "@headlessui/react";
import { ToastIcon, Toaster } from "react-hot-toast";
import { IconCheckmark, IconClose } from "../Icon";

const index = () => {
	return (
		<Toaster
			toastOptions={{
				duration: 4000,
				success: { icon: <IconCheckmark />, duration: 2500 },
				error: { icon: <IconClose />, duration: 3000 },
			}}
		>
			{(t) => (
				<Transition
					appear
					show={t.visible}
					className={`transform mt-4 p-3 px-5 flex items-center gap-3 rounded-lg shadow-lg md:text-lg text-white font-semibold ${
						t.type === "error" ? `bg-red-500` : `bg-green-500`
					} tracking-wide`}
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
			)}
		</Toaster>
	);
};

export default index;
