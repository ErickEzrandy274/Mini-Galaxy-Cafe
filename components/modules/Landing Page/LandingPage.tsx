import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import { welcomingCardData } from "./data";

const LandingPage = () => {
    return (
        <>
            <div className="text-white text-center text-6xl tracking-wider">Please Choose Our Menus...</div>
            <div className="flex md:flex-row flex-col gap-8 justify-center">
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
        </>
    );
};

export default LandingPage;
