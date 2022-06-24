import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import { WelcomingCardData } from "./data";

const LandingPage = () => {
    return (
        <>
            <div className="text-white text-center text-4xl sm:text-5xl lg:text-6xl tracking-wider">Please Choose Our Menus...</div>
            <div className="flex lg:flex-row flex-col gap-8 justify-center items-center">
                {WelcomingCardData.map(
                    (item: WelcomingCardProps) => {
                        return (
                            <WelcomingCard
                                key={"welcomingCard-" + item.index}
                                {...item}
                            />
                        );
                    }
                )}
            </div>
        </>
    );
};

export default LandingPage;
