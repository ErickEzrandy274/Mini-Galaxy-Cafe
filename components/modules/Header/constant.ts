export const navigation = [
    { name: "Home", href: "/"},
    { name: "Food", href: "/food"},
    { name: "Beverage", href: "/beverage"},
    { name: "Snack", href: "/snack"},
    { name: "Checkout", href: "/checkout"},
]

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}