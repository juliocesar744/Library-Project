import { Role } from "../../enums/role";

export interface UserRequest {
    username: string
    password: string
    role: Role
    email: string
    phone_no: string
    address: string
}

export interface UsernameRequest {
    user_id: number
}

export interface UserUpdateRequest {
    user_id: number
    username?: string
    password?: string
    role?: Role
    email?: string
    phone_no?: string
    address?: string
}