import AuthService from "@configs/api/auth";
import { useMutation } from "react-query";

export const useAuth = (
  user: UserRegister,
  onSuccess?: onSuccessQuery,
  onError?: onErrorQuery
) => {
  const signUpMutation = () => AuthService.signUp(user);


//   return useMutation(
//     async ({ email, password, username }) => {
//       // Call API to submit login data 
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password, username})  
//       })

//       return response.json()
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch any queries that depends on user login state
//         queryClient.invalidateQueries('user') 
//       },
//     }
//   )

  return useMutation("signUp", signUpMutation, {
    onSuccess,
    onError,
  });

};
