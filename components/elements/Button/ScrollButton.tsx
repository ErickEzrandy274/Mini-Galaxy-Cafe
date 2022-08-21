// reference https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ScrollButton = () => {
	const { pathname } = useRouter();
	const [visible, setVisible] = useState(false);
	const productLink: string[] = ["/food", "/beverage", "/snack", "/favorite"];
	const inProductPage = productLink.includes(pathname);

	useEffect(() => {
		window.onscroll = () => {
			setVisible(
				document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
			);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
			onClick={scrollToTop}
			className={`bg-red-600 text-white font-bold leading-tight 
                uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
				transition duration-700 ease-in-out fixed bottom-5 right-5 z-20 p-3 ${
					visible ? `opacity-100` : `opacity-0`
				}`}
		>
			<div
				className={`flex flex-col justify-center items-center gap-1 ${
					inProductPage ? `hover:scale-110` : `hover:scale-125`
				} ease-out duration-500 transition`}
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					className="w-4 h-4"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
					></path>
				</svg>

				{inProductPage && (
					<p className={`text-[.6rem]`}>
						Check
						<br /> Out
					</p>
				)}
			</div>
		</button>
	);
};

export default ScrollButton;
