import React from "react";
import { WelcomingCardProps } from "../Card/interface";
import WelcomingCard from "../Card/WelcomingCard";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
    const welcomingCardData: WelcomingCardProps[] = [
        {
            name: "Food",
            image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
            href: "/food",
        },
        {
            name: "Beverage",
            image: "https://assets.grab.com/wp-content/uploads/sites/9/2019/12/17165506/ID-thai-tea-dum-dum-thai-drinks-3.jpg",
            href: "/beverage",
        },
        {
            name: "Snack",
            image: "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__700_0_0_0_auto.jpg",
            href: "/snack",
        },
    ];
    return (
        <div className="flex flex-col gap-20 bg-gray-700 min-h-screen">
            <Navbar />
            <div className="flex md:flex-row flex-col gap-6 justify-center">
                {welcomingCardData.map(
                    (item: WelcomingCardProps, index: number) => {
                        return (
                            <WelcomingCard
                                key={"welcomingCard-" + index}
                                name={item.name}
                                image={item.image}
                                href={item.href}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default LandingPage;
