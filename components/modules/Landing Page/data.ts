import { WelcomingCardProps } from "../../elements/Card/interface";
import { v4 as uuidv4  } from 'uuid';

export const WelcomingCardData: WelcomingCardProps[] = [
    {
        index: uuidv4(),
        name: "Food",
        image: "/Nasi-Goreng.jpg",
        href: "/food",
    },
    {
        index: uuidv4(),
        name: "Beverage",
        image: "/Thai-Tea.jpg",
        href: "/beverage",
    },
    {
        index: uuidv4(),
        name: "Snack",
        image: "/Spicy-Macaroni.jpg",
        href: "/snack",
    },
];