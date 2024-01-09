import AuthService from '@configs/api/auth'
import { useMutation } from '@tanstack/react-query'

export const useSignUpMutation = () => {

    return useMutation({
        mutationFn: async (variables: UserRegister) => {
            return await AuthService.signUp(variables);
        },
        onSuccess: (user) => {
            console.log('data12122',user)
        },
        onError: (error) => {
            console.log('error',error)
        }
    });
}

export const useSignInMutation = () => {

    return useMutation({
        mutationFn: async (variables: UserResponse) => {
            return await AuthService.signIn(variables);
        },
        onSuccess: (user) => {
            console.log('data12122',user)
        },
        onError: (error) => {
            console.log('error',error)
        }
    });
}


