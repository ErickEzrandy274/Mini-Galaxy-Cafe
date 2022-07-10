export interface ImageWrapperProps {
    type: "beverage" | "other"
    images: string[]
    version: "mobile" | "desktop"
    customClassDesktop?: string[]
}