import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { WelcomingCardProps } from "./interface";

const WelcomingCard: React.FC<WelcomingCardProps> = ({ name, image, href, index }) => {

    return (
        <div className="w-3/5 sm:w-2/5 lg:w-1/4 xl:w-1/5 text-center bg-white rounded-xl border sm:my-3 sm:mb-10
            border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 cursor-default">
            <OptimizedImage
                image={image}
                index={index}
                welcoming={true}
            />

            <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
            
                <a
                    href={href}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white 
                        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
                >
                    See more
                    <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default WelcomingCard;
