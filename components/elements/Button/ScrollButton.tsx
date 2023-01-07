// reference https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconUpArrow } from "@elements";

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
				<IconUpArrow />

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
