import React from "react";
import { Transition } from "@headlessui/react";
import { ToastIcon, Toaster } from "react-hot-toast";
import IconCheckmark from "../Icon/IconCheckmark";
import IconClose from "../Icon/IconClose";

const index = () => {
	return (
		<Toaster
			toastOptions={{
				success: { icon: <IconCheckmark /> },
				error: { icon: <IconClose /> },
			}}
		>
			{(t) => (
				<Transition
					appear
					show={t.visible}
					className={`transform p-3 px-5 flex items-center gap-3 rounded-lg shadow-lg md:text-lg text-white font-semibold ${
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
