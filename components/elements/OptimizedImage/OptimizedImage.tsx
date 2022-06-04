import React from 'react'
import { OptimizedImageProps } from './interface'
import Image from 'next/image'

const OptimizedImage: React.FC<OptimizedImageProps> = ({ image, index }) => {
    return (
        <Image
            src={image}
            alt={"Foods-" + index}
            width={500}
            height={400}
            objectFit="cover"
            loading="eager"
            priority
            quality={100}
        />
    )
}

export default OptimizedImage