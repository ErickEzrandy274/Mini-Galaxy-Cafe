import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import Navbar from "../Navbar/Navbar";
import { welcomingCardData } from "./data";

const LandingPage = () => {
    return (
        <div className="flex flex-col gap-20 bg-gray-700 min-h-screen">
            <Navbar />
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
        </div>
    );
};

export default LandingPage;
