import { navData } from "./constant"

interface UserProps {
    user: any
}

interface LogoutProps {
    handleLogout: () => void
}

export interface UserDetectedProps extends UserProps, LogoutProps {
    className: string
}

export interface RouteProps extends UserProps, LogoutProps {
    navData: navData[]
}