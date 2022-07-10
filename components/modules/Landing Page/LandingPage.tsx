import React from "react";
import { dataLanding } from "./dataLanding";
import { TemplateLandingProps } from "./interface";
import TemplateLanding from "./TemplateLanding";

const LandingPage = () => {
	return (
		<div className="bg-[url('/rest-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
			<div className="flex flex-col gap-10 sm:gap-24 px-10 sm:px-12 lg:px-20 relative z-10 py-32 xl:py-40">
				<div className="lg:w-3/5 xl:w-2/5 flex flex-col gap-3 items-start relative z-10">
					<h1 className="font-bold text-6xl lg:text-7xl text-white leading-tight sm:mt-4">
						Mini Galaxy Cafe
						<span className="text-sm">est. 2022</span>
					</h1>
					<span className="text-lg font-semibold">
						This cafe is not only designed as a hangout place, but
						can also be a kind of co-working space that is quite
						interesting and comfortable. Creative work processes can
						also be born from the interior of a small cafe like this
					</span>
				</div>

				{dataLanding.map(
					(item: TemplateLandingProps, index: number) => {
						return (
							<TemplateLanding
								{...item}
								key={"TemplateLanding-" + index}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default LandingPage;
