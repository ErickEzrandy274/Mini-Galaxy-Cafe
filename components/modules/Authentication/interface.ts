export interface LoginInputType {
    email: string
	password: string
}

export interface RegisterInputType extends LoginInputType {
    nickname: string
}