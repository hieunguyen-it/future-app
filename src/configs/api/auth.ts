import apiClient from "./axios.config";

const signUp = async (formData: UserRegister) => {
  const response = await apiClient.post<UserResponse>("/auth/signup", formData);
  return response.data;
};

const signIn = async (formData: UserResponse) => {
  const response = await apiClient.post<UserResponse>("/auth/signin", formData);
  return response.data;
};

const AuthService = {
  signUp,
  signIn
};

export default AuthService;
