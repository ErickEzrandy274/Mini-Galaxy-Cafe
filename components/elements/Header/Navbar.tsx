/* eslint-disable @next/next/no-img-element */
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { resetProduct, useAuth, useUserStuff } from "@utils";
import { useDispatch } from "react-redux";
import {
	Indicator,
	NewLink,
	PreferredRoute,
	navigation,
	authNavs,
	navData,
} from "@elements";
import { useCallback, useMemo } from "react";
import Link from "next/link";
import Router from "next/router";

const Navbar = () => {
	const { user, logout } = useAuth();
	const { userStuff } = useUserStuff();
	const dispatch = useDispatch();
	const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

	const handleLogout = useCallback(() => {
		memoizedDispatch(resetProduct());
		logout();
		Router.push("/login");
	}, [memoizedDispatch, logout]);

	const isMoreThanTen = useMemo(() => userStuff.length > 10, [userStuff]);

	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
			{({ open, close }) => (
				<>
					<section className="max-w-7xl mx-auto p-1.5 md:px-6 lg:px-8">
						<article className="relative flex items-center justify-between h-24 md:h-14">
							<section className="absolute inset-y-0 right-2 flex items-center xl:hidden">
								{/* Mobile menu button*/}

								<Disclosure.Button
									className="inline-flex items-center justify-center p-2 rounded-md 
									text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none
										focus:ring-2 focus:ring-inset focus:ring-white"
								>
									<span className="sr-only">Open main menu</span>

									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : userStuff.length > 0 ? (
										<Indicator
											className={`badge-primary rounded-full tracking-tight mx-auto ${
												isMoreThanTen ? "w-8" : "w-5"
											}`}
											infoIndicator={`${
												isMoreThanTen ? `10+` : userStuff.length
											}`}
										>
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										</Indicator>
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</section>

							<section className="flex-1 flex items-center justify-center xl:items-stretch xl:justify-start">
								<section className="flex-shrink-0 flex items-center">
									<Link href="/" passHref>
										<a>
											<img
												className="block lg:hidden h-10 w-auto"
												src="/gal-logo.svg"
												alt="Galaxy Cafe Logo"
											/>
										</a>
									</Link>

									<Link href="/" passHref>
										<a>
											<img
												className="hidden lg:block h-10 w-auto"
												src="/gal-logo.svg"
												alt="Galaxy Cafe Logo"
											/>
										</a>
									</Link>
								</section>

								<section className="hidden xl:block xl:ml-3">
									<section className="flex space-x-3 items-center">
										{navigation?.map((item: navData, index: number) => (
											<NewLink {...item} key={`NewLink-${index}`} />
										))}
									</section>
								</section>
							</section>

							<section className="hidden xl:block">
								<section className="flex space-x-4">
									<PreferredRoute
										navData={authNavs}
										handleLogout={handleLogout}
										user={user}
									/>
								</section>
							</section>
						</article>
					</section>

					<Disclosure.Panel className="xl:hidden">
						<section className="flex flex-col px-3 pt-2 pb-3 space-y-1">
							{navigation?.map((item: navData) => {
								return (
									<Transition
										appear
										show={open}
										enter="transition-all duration-700"
										enterFrom="opacity-0 ease-out scale-25"
										enterTo="opacity-100 ease-in scale-100"
										leave="transition-all duration-1000"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-75"
										key={item.name}
									>
										<Disclosure.Button className="flex flex-col flex-start">
											<NewLink {...item} close={close} isMobileVersion />
										</Disclosure.Button>
									</Transition>
								);
							})}

							<PreferredRoute
								navData={authNavs}
								handleLogout={handleLogout}
								user={user}
							/>
						</section>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
