export type navData = {
	name: string;
	href: string;
};

export const navigation: navData[] = [
	{ name: "Home", href: "/" },
	{ name: "Menu", href: "/menu" },
	{ name: "Food", href: "/food" },
	{ name: "Beverage", href: "/beverage" },
	{ name: "Snack", href: "/snack" },
	{ name: "Favorite", href: "/favorite" },
	{ name: "Checkout", href: "/checkout" },
];

export const authNavs: navData[] = [
	{ name: "Login", href: "/login" },
	{ name: "Register", href: "/register" },
];

export function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}
