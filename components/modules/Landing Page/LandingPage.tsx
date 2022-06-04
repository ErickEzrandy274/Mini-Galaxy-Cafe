import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import { welcomingCardData } from "./data";

const LandingPage = () => {
    return (
        <>
            <div className="text-white text-center text-4xl sm:text-5xl lg:text-6xl tracking-wider">Please Choose Our Menus...</div>
            <div className="flex lg:flex-row flex-col gap-8 justify-center items-center">
                {welcomingCardData.map(
                    (item: WelcomingCardProps, index: number) => {
                        return (
                            <WelcomingCard
                                key={"welcomingCard-" + index}
                                index={index}
                                name={item.name}
                                image={item.image}
                                href={item.href}
                            />
                        );
                    }
                )}
            </div>
        </>
    );
};

export default LandingPage;
