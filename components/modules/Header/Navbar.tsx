/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import NewLink from "../../elements/NewLink/NewLink";
import { navigation, authNavs, navData } from "./constant";
import PreferredRoute from "./PreferredRoute";

const Navbar = () => {
	const { user, logout } = useAuth();
	const { pathname, push } = useRouter();

	const handleLogout = () => {
		logout();
		push("/login");
	};

	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-24 md:h-14">
							<div className="absolute inset-y-0 right-0 flex items-center md:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button
									className="inline-flex items-center justify-center p-2 rounded-md 
									text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none
										focus:ring-2 focus:ring-inset focus:ring-white"
								>
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
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
										{navigation.map((item: navData, index: number) => (
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
							{navigation.map(({ name, href }) => (
								<Disclosure.Button
									key={name}
									as="a"
									href={href}
									className={`px-3 py-2 rounded-md text-base
										${
											pathname === href
												? "bg-gray-900 text-white font-semibold"
												: "text-gray-300 hover:bg-gray-700 hover:text-white font-medium"
										}
										`}
									aria-current={pathname === href ? "page" : undefined}
								>
									{name}
								</Disclosure.Button>
							))}

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
