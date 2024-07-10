export type UserType = {
    email: string
}

export type ErrorType = {
    message: string
}

export type AuthState = {
    user: UserType | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: ErrorType | null
}