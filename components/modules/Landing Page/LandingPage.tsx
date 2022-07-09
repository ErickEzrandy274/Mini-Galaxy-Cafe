/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

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

				<div className="flex flex-col sm:flex-row gap-5 items-center border-2 border-green-700">
					<div className="hidden sm:flex w-1/2 lg:w-3/5 relative">
						<div className="hidden lg:block">
							<img
								src="/Soto-Ayam.jpg"
								alt="Soto-Ayam"
								className="h-[120%] pr-20"
							/>
						</div>
						<div className="hidden sm:block">
							<img
								src="/Beef-Bourguignon.jpg"
								alt="Beef-Bourguignon"
								className="lg:h-[100%] lg:relative lg:top-1/10 lg:-left-1/4"
							/>
						</div>
					</div>

					<div className="flex sm:hidden">
						<div className="w-1/2">
							<img
								src="/Soto-Ayam.jpg"
								alt="Soto-Ayam"
								className="h-[100%]"
							/>
						</div>
						<div className="w-1/2">
							<img
								src="/Beef-Bourguignon.jpg"
								alt="Beef-Bourguignon"
								className="h-[100%]"
							/>
						</div>
					</div>

					<div className="flex flex-col items-center sm:items-start md:items-end gap-3 px-5 sm:px-3 sm:w-1/2 lg:w-2/5">
						<h2 className="font-bold text-4xl lg:text-5xl text-white leading-tight">
							Our Delicious Foods
						</h2>
						<span>
							Many delicious foods that you can taste from various
							countries. Order your food now! Guaranteed you will
							not regret because your food will be cooked by the
							world&apos;res greatest chef
						</span>
						<div>
							<Link href="/foods" passHref>
								<a className="btn btn-outline btn-info rounded-full">
									Order Foods
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-5 items-center border-2 border-red-700">
					<div className="flex sm:hidden">
						<div className="w-1/2">
							<img
								src="/Sweet-Iced-Tea.jpg"
								alt="Sweet-Iced-Tea"
								className="h-[100%]"
							/>
						</div>
						<div className="w-1/2">
							<img
								src="/Oreo-Milkshake.jpg"
								alt="Oreo-Milkshake"
								className="h-[100%]"
							/>
						</div>
					</div>

					<div className="flex flex-col items-center sm:items-start gap-3 sm:w-1/2 lg:w-2/5 lg:pr-20 px-5 sm:px-3">
						<h2 className="font-bold text-4xl lg:text-5xl text-white leading-tight">
							Our Fresh Beverages
						</h2>
						<span>
							After tasting the main course, the taste is
							incomplete if it is not accompanied by a sweet,
							fresh, and cold drink. We have prepared a variety of
							drinks, let&apos;res order now!
						</span>
						<div>
							<Link href="/beverages" passHref>
								<a className="btn btn-outline btn-info rounded-full">
									Order Beverages
								</a>
							</Link>
						</div>
					</div>

					<div className="hidden sm:flex w-3/5 relative">
						<div className="hidden lg:block">
							<img
								src="/Sweet-Iced-Tea.jpg"
								alt="Sweet-Iced-Tea"
								className="h-[90%] relative top-1/10 w-[110%] -right-1/4"
							/>
						</div>
						<div className="hidden sm:block">
							<img
								src="/Oreo-Milkshake.jpg"
								alt="Oreo-Milkshake"
								className="lg:h-[110%]"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-5 items-center border-2 border-indigo-700">
					<div className="hidden sm:flex w-1/2 lg:w-3/5 relative">
						<div className="hidden lg:block">
							<img
								src="/Burger.jpg"
								alt="Burger"
								className="h-[130%]"
							/>
						</div>
						<div className="hidden sm:block">
							<img
								src="/CookiesnCream.jpg"
								alt="CookiesnCream"
								className="lg:h-[110%] lg:relative lg:top-1/10 lg:w-[110%] lg:-left-1/4"
							/>
						</div>
					</div>

					<div className="flex sm:hidden">
						<div className="w-1/2">
							<img
								src="/Burger.jpg"
								alt="Burger"
								className="h-[100%]"
							/>
						</div>
						<div className="w-1/2">
							<img
								src="/CookiesnCream.jpg"
								alt="CookiesnCream"
								className="h-[100%]"
							/>
						</div>
					</div>

					<div className="flex flex-col items-center sm:items-start md:items-end gap-3 px-5 sm:px-3 sm:w-1/2 lg:w-2/5">
						<h2 className="font-bold text-4xl lg:text-5xl text-white leading-tight">
							Our Snacks
						</h2>
						<span>
							In addition to delicious and fresh food and drinks,
							we also provide snacks that are no less interesting
							and delicious. Suitable for those of you who are on
							a diet, just hanging out, or want to be consumed at
							home. Order our snacks now!
						</span>
						<div>
							<Link href="/snacks" passHref>
								<a className="btn btn-outline btn-info rounded-full">
									Order Snacks
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
