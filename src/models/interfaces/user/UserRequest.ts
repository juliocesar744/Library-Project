export interface UserRequest {
    username: string;
    password: string
}

export interface UsernameRequest {
    username: string;
}

export interface UserUpdateRequest {
    oldUsername: string;
    username: string;
}