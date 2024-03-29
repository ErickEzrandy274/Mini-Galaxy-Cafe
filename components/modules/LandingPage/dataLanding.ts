import { TemplateLandingProps } from "./interface";

export const dataLanding: TemplateLandingProps[] = [
	{
		title: "Our Delicious Foods",
		content: `Many delicious foods that you can taste from various countries. Order your food now! Guaranteed you will not regret because your food will be cooked by the world's greatest chef`,
		href: "/food",
		linkName: "Order Foods",
		images: ["/Soto-Ayam.webp", "/Beef-Bourguignon.webp"],
	},
	{
		title: "Our Fresh Beverages",
		content: `After tasting the main course, the taste is incomplete if it is not accompanied by a sweet, fresh, and cold drink. We have prepared a variety of drinks, let's order now!`,
		href: "/beverage",
		linkName: "Order Beverages",
		images: ["/Sweet-Iced-Tea.webp", "/Oreo-Milkshake.webp"],
	},
	{
		title: "Our Snacks",
		content: `In addition to delicious and fresh food and drinks, we also provide snacks that are no less interesting and delicious. Suitable for those of you who are on a diet, just hanging out, or want to be consumed at home. Order our snacks now!`,
		href: "/snack",
		linkName: "Order Snacks",
		images: ["/Burger.webp", "/CookiesnCream.webp"],
	},
];

export const customClassDesktopBeverages: string[] = [
	"h-[70%] relative top-1/10 w-[110%] -right-1/4",
	"lg:h-[90%]",
];

export const customClassDesktopNotBeverages: string[] = [
	"h-[120%]",
	"lg:h-[100%] lg:relative lg:top-1/10 lg:-left-1/4",
];
