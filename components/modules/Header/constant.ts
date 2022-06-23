export const navigation = [
    { name: "Home", href: "/"},
    { name: "Food", href: "/food"},
    { name: "Beverage", href: "/beverage"},
    { name: "Snack", href: "/snack"},
    { name: "Checkout", href: "/checkout" },
]

export const authNavs = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register"},
]

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}