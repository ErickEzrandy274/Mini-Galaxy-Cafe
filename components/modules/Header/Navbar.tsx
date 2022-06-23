import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { navigation, classNames, authNavs } from "./constant";

const Navbar = () => {
	const { pathname, push } = useRouter();
	const { user, logout } = useAuth();
	const customClassLogOut = `px-2 py-1 hover:font-semibold text-lg bg-red-600 transition-colors duration-200 transform rounded-lg 
		hover:bg-red-700 text-gray-200 hover:text-gray-100 md:mx-2`;

	const handleLogout = () => {
		logout();
		push("/login");
	};

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-24 md:h-14">
							<div className="absolute inset-y-0 right-0 flex items-center md:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
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

								<div className="hidden md:block md:ml-6">
									<div className="flex space-x-4">
										{navigation.map(({ name, href }) => (
											<Link
												key={name}
												href={href}
												passHref
											>
												<a
													className={classNames(
														pathname === href
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md tracking-wide font-medium"
													)}
													aria-current={
														pathname === href
															? "page"
															: undefined
													}
												>
													{name}
												</a>
											</Link>
										))}
										{!user &&
											authNavs.map(({ name, href }) => (
												<Link
													key={name}
													href={href}
													passHref
												>
													<a
														className={classNames(
															pathname === href
																? "bg-gray-900 text-white"
																: "text-gray-300 hover:bg-gray-700 hover:text-white",
															"px-3 py-2 rounded-md tracking-wide font-medium"
														)}
														aria-current={
															pathname === href
																? "page"
																: undefined
														}
													>
														{name}
													</a>
												</Link>
											))}
									</div>
								</div>
							</div>

							<div className="hidden lg:block md:ml-6">
								<div className="flex space-x-4">
									{user ? (
										<div className="flex flex-col px-2 md:flex-row text-center gap-3 md:items-center">
											<div className="flex gap-2 md:gap-0 md:flex-col items-start md:items-center font-semibold text-white">
												<p>Hello</p>
												<p>
													{user.displayName
														? user.displayName
														: user.email}
												</p>
												<p className="md:hidden">
													👋👋👋
												</p>
											</div>
											<button
												onClick={handleLogout}
												className={customClassLogOut}
											>
												Logout
											</button>
										</div>
									) : (
										authNavs.map(({ name, href }) => (
											<Link
												key={name}
												href={href}
												passHref
											>
												<a
													className={classNames(
														pathname === href
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md tracking-wide font-medium"
													)}
													aria-current={
														pathname === href
															? "page"
															: undefined
													}
												>
													{name}
												</a>
											</Link>
										))
									)}
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map(({ name, href }) => (
								<Disclosure.Button
									key={name}
									as="a"
									href={href}
									className={classNames(
										pathname === href
											? "bg-gray-900 text-white font-bold"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={
										pathname === href ? "page" : undefined
									}
								>
									{name}
								</Disclosure.Button>
							))}
							{user ? (
										<div className="flex flex-col px-2 md:flex-row text-center gap-3 md:items-center">
											<div className="flex gap-2 md:gap-0 md:flex-col items-start md:items-center font-semibold text-white">
												<p>Hello</p>
												<p>
													{user.displayName
														? user.displayName
														: user.email}
												</p>
												<p className="md:hidden">
													👋👋👋
												</p>
											</div>
											<button
												onClick={handleLogout}
												className={customClassLogOut}
											>
												Logout
											</button>
										</div>
									) : (
										authNavs.map(({ name, href }) => (
											<Link
												key={name}
												href={href}
												passHref
											>
												<a
													className={classNames(
														pathname === href
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md tracking-wide font-medium"
													)}
													aria-current={
														pathname === href
															? "page"
															: undefined
													}
												>
													{name}
												</a>
											</Link>
										))
									)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
