interface UserLogin {
    email: string
    password: string
}
interface UserRegister {
    email: string
    username: string
    password: string
}

interface LoginInfo {
    data: {
        message: string
        access_token: string
        status: string
    }
}
