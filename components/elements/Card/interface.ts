export interface CardProps {
    name: string
    image: string
}

export interface WelcomingCardProps extends CardProps {
    href: string
    index: string
}

export interface ProductCardProps extends CardProps {
    harga: string
    index: number
}