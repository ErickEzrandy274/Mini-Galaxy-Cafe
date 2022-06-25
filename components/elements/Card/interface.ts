export interface CardProps {
    name: string
    image: string
}

export interface WelcomingCardProps extends CardProps {
    href: string
    index?: number
}

export interface ProductCardProps extends CardProps {
    price: string
    index: number
    buyer: string[]
}