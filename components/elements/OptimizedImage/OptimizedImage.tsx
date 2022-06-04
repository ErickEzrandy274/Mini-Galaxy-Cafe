import React from 'react'
import { OptimizedImageProps } from './interface'
import Image from 'next/image'

const OptimizedImage: React.FC<OptimizedImageProps> = ({ image, index }) => {
    return (
        <Image
            src={image}
            alt={"Foods-" + index}
            width={300}
            height={270}
            layout="fixed"
            objectFit="cover"
            loading="eager"
            priority
        />
    )
}

export default OptimizedImage