// reference https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { IconUpArrow } from "@elements";

const ScrollButton = () => {
	const { pathname } = useRouter();
	const [visible, setVisible] = useState(false);
	const productLink: string[] = useMemo(
		() => ["/food", "/beverage", "/snack", "/favorite"],
		[]
	);
	const inProductPage = useMemo(
		() => productLink.includes(pathname),
		[pathname, productLink]
	);

	useEffect(() => {
		window.onscroll = () => {
			setVisible(
				document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
			);
		};
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<button
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
			onClick={scrollToTop}
			aria-label="scroll button"
			aria-labelledby="scroll button"
			className={`bg-red-600 text-white font-bold leading-tight
					uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
					focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
					transition duration-700 ease-in-out fixed bottom-5 right-5 z-20 ${
						visible ? `opacity-100` : `opacity-0`
					}`}
		>
			<section
				className={`flex flex-col justify-center items-center gap-1 p-3 rounded-full w-max ${
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
			</section>
		</button>
	);
};

export default ScrollButton;
