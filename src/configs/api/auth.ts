import apiClient from "./axios.config";

const signUp = async (formData: UserRegister) => {
  const response = await apiClient.post("/auth/signup", formData);
  return response.data;
};

const signIn = async (formData: UserLogin) => {
  const response = await apiClient.post("/auth/signin", formData);
  return response.data;
};

const signOut = async () => {
  await apiClient.get("/auth/signout");
};

const AuthService = {
  signUp,
  signIn,
  signOut
};

export default AuthService;
