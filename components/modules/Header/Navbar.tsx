/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { navigation, authNavs, navData } from "./constant";
import { useDispatch } from "react-redux";
import { reset_product } from "../../../redux/dataBuyer/dataBuyerSlice";
import { useUserStuff } from "../../../context/UserStuffContext";
import NewLink from "../../elements/NewLink/NewLink";
import Link from "next/link";
import PreferredRoute from "./PreferredRoute";
import Indicator from "../../elements/Indicator/Indicator";

const Navbar = () => {
	const { user, logout } = useAuth();
	const { push } = useRouter();
	const dispatch = useDispatch();
	const { userStuff } = useUserStuff();

	const handleLogout = () => {
		logout();
		push("/login");
		dispatch(reset_product());
	};

	const isMoreThanTen = userStuff.length > 10;

	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
			{({ open, close }) => (
				<>
					<div className="max-w-7xl mx-auto p-1.5 md:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-24 md:h-14">
							<div className="absolute inset-y-0 right-2 flex items-center md:hidden">
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
							</div>

							<div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
								<div className="flex-shrink-0 flex items-center">
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
								</div>

								<div className="hidden md:block md:ml-3">
									<div className="flex space-x-3">
										{navigation?.map((item: navData, index: number) => (
											<NewLink {...item} key={`NewLink-${index}`} />
										))}
									</div>
								</div>
							</div>

							<div className="hidden lg:block md:ml-6">
								<div className="flex space-x-4">
									<PreferredRoute
										navData={authNavs}
										handleLogout={handleLogout}
										user={user}
									/>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="flex flex-col px-3 pt-2 pb-3 space-y-1">
							{navigation?.map((item: navData) => {
								return (
									<Disclosure.Button
										key={item.name}
										className="flex flex-col flex-start"
									>
										<NewLink {...item} close={close} isMobileVersion />
									</Disclosure.Button>
								);
							})}

							<PreferredRoute
								navData={authNavs}
								handleLogout={handleLogout}
								user={user}
							/>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
