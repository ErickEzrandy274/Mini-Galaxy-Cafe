import { WelcomingCardProps } from "../../elements/Card/interface";
import { v4 as uuidv4  } from 'uuid';

export const WelcomingCardData: WelcomingCardProps[] = [
    {
        index: uuidv4(),
        name: "Food",
        image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
        href: "/food",
    },
    {
        index: uuidv4(),
        name: "Beverage",
        image: "https://assets.grab.com/wp-content/uploads/sites/9/2019/12/17165506/ID-thai-tea-dum-dum-thai-drinks-3.jpg",
        href: "/beverage",
    },
    {
        index: uuidv4(),
        name: "Snack",
        image: "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__700_0_0_0_auto.jpg",
        href: "/snack",
    },
];