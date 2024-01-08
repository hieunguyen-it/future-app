import AuthService from '@configs/api/auth'
import { useMutation, useQueryClient } from 'react-query'

export const useLoginMutation = () => {
    const queryClient = useQueryClient()

    return useMutation(
        "signUp",
        async (variables: UserRegister) => {
            AuthService.signUp(variables)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user')
            },
        }
    )
}