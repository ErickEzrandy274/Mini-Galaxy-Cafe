import { TemplateLandingProps } from "./interface";

export const dataLanding: TemplateLandingProps[] = [
	{
		title: "Our Delicious Foods",
		content: `Many delicious foods that you can taste from various countries. Order your food now! Guaranteed you will not regret because your food will be cooked by the world's greatest chef`,
		href: "/foods",
		linkName: "Order Foods",
		images: ["/Soto-Ayam.jpg", "/Beef-Bourguignon.jpg"],
	},
	{
		title: "Our Fresh Beverages",
		content: `After tasting the main course, the taste is incomplete if it is not accompanied by a sweet, fresh, and cold drink. We have prepared a variety of drinks, let's order now!`,
		href: "/beverages",
		linkName: "Order Beverages",
		images: ["/Sweet-Iced-Tea.jpg", "/Oreo-Milkshake.jpg"],
	},
	{
		title: "Our Snacks",
		content: `In addition to delicious and fresh food and drinks, we also provide snacks that are no less interesting and delicious. Suitable for those of you who are on a diet, just hanging out, or want to be consumed at home. Order our snacks now!`,
		href: "/snacks",
		linkName: "Order Snacks",
		images: ["/Burger.jpg", "/CookiesnCream.jpg"],
	},
];

export const customClassDesktopBeverages: string[] = [
	"h-[90%] relative top-1/10 w-[110%] -right-1/4",
	"lg:h-[110%]",
];

export const customClassDesktopNotBeverages: string[] = [
	"h-[120%]",
	"lg:h-[100%] lg:relative lg:top-1/10 lg:-left-1/4",
];
