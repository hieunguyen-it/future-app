import apiClient from "./axios.config";

const signUp = async (formData: UserRegister) => {
  const response = await apiClient.post<UserResponse>("/auth/signup", formData);
  return response.data;
};

const AuthService = {
  signUp,
};

export default AuthService;
