import AuthService from '@configs/api/auth'
import { keyLocalStore, removeLocalStorage, setLocalStorage } from '@helpers/utils/local-storage';
import { setAuthenticated, useAppDispatch } from '@store';
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (variables: UserLogin) => {
      return await AuthService.signIn(variables);
    },
    onSuccess: async (user: LoginInfo) => {
      await dispatch(setAuthenticated(true));
      setLocalStorage(keyLocalStore.token, user?.data.access_token);
      navigate("/");
    },
    onError: (error) => {
      console.log('error', error)
    }
  });
}

export const useSignOutMutation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return useMutation({
      mutationFn: async () => {
          return await AuthService.signOut();
      },
      onSuccess: async () => {
        await dispatch(setAuthenticated(true));
        removeLocalStorage(keyLocalStore.token);
        navigate("sign-in");
      },
      onError: (error) => {
          console.log('error',error)
      }
  });
}



