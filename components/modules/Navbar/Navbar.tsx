/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import React, {useState} from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";


function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [navigation, setNav] = useState([
        { name: "Home", href: "/", current: true },
        { name: "Food", href: "/food", current: false },
        { name: "Beverage", href: "/beverage", current: false },
        { name: "Snack", href: "/snack", current: false },
        { name: "Checkout", href: "/checkout", current: false },
    ])

    const [activeNav, setActiveNav] = useState("Home")

    const handleClick = (active :string) => {    

    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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

                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/" passHref>
                                        <a>
                                            <img
                                                className="block lg:hidden h-8 w-auto"
                                                src="/gal-logo.svg"
                                                alt="Galaxy Cafe Logo"
                                            />
                                        </a>
                                    </Link>

                                    <Link href="/" passHref>
                                        <a>
                                            <img
                                                className="hidden lg:block h-8 w-auto"
                                                src="/gal-logo.svg"
                                                alt="Galaxy Cafe Logo"
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                passHref
                                            >
                                                <a
                                                    onClick={() => handleClick(item.name)}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                        "px-3 py-2 rounded-md tracking-wide font-medium"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white font-bold"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
