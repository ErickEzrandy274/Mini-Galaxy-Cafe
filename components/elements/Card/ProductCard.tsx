import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = ({name, harga, image, index}) => {
    return (
        <div className="cursor-default w-full lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <OptimizedImage
                    image={image}
                    index={index}
                />

                <div className="card-body text-white tracking-wide">
                    <h2 className="card-title font-semibold">{name}</h2>
                    <p className="sm:text-base text-lg">Rp {harga}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary sm:text-base text-lg shadow-xl">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
