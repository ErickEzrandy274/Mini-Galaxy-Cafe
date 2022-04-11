import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { welcomingCardData } from "./data";

const LandingPage = () => {
    return (
        <div className="flex flex-col gap-10 bg-gray-700 min-h-screen">
            <Navbar />
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
            <Footer />
        </div>
    );
};

export default LandingPage;
