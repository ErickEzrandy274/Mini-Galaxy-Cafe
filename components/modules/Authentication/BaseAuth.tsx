import React, { useMemo } from "react";
import { useWindowSize, pageTransition } from "@utils";
import { BaseAuthProps } from "./interface";
import { motion } from "framer-motion";

const BaseAuth: React.FC<BaseAuthProps> = ({ typeForm, children }) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = useMemo(
		() => pageTransition,
		[]
	);

	const subContent = useMemo(() => {
		return typeForm === "Register"
			? `Register now if you don't have an account!`
			: `Login to access your account`;
	}, [typeForm]);

	return (
		<motion.section
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			className={`bg-gray-900 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-lg ${
				width <= 350 && `mx-4`
			}`}
		>
			<section className="flex justify-center lg:h-[40rem] rounded-lg">
				<article className="hidden bg-cover lg:block lg:w-2/3 bg-[url('/Chan-Walrus.webp')] rounded-l-lg">
					<section className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 rounded-l-lg">
						<section>
							<h2 className="text-4xl font-bold text-white">
								Mini Galaxy Cafe
							</h2>

							<p className="max-w-xl mt-3 text-gray-300">
								The combination of modern and contemporary interior styles gives
								birth to a minimalist feel that is so strong. This eclectic
								interior style also looks simple with an elegant appearance.
								This cafe is not only designed as a hangout place, but can also
								be a kind of co-working space that is quite interesting and
								comfortable. Creative work processes can also be born from the
								interior of a small cafe like this. In addition, this cafe also
								provides a variety of delicious food, drinks, and snacks. Want
								to order our dishes? Immediately login to your account!
							</p>
						</section>
					</section>
				</article>

				<article className="flex items-center w-full max-w-md p-6 mx-auto lg:w-2/6 font-semibold">
					<section className="flex-1">
						<section className="text-center">
							<h2 className="text-4xl font-bold text-center text-white">
								Mini Galaxy Cafe
							</h2>

							<p className="my-3 text-gray-300">{subContent}</p>
						</section>

						{children}
					</section>
				</article>
			</section>
		</motion.section>
	);
};

export default BaseAuth;
