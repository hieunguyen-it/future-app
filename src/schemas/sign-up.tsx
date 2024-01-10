import * as z from 'zod'

export const signUpSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(6, {
        message: 'Minium 6 characters required'
    }),
    username: z.string().min(1, {
        message: 'Name is required'
    })
})
