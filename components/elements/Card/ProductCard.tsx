/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = ({name, harga, image, index}) => {
    return (
        <div className="cursor-default xl:w-1/5 p-5">
            <div className="card card-compact bg-base-100 shadow-xl">
                <Image
                    src={image}
                    alt={"Foods-" + index}
                    width={350}
                    height={250}
                    layout="fixed"
                    objectFit="cover"
                />

                <div className="card-body text-white tracking-wide">
                    <h2 className="card-title font-semibold">{name}</h2>
                    <p className="text-base">Rp {harga}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
