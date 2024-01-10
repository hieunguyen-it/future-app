import axios from 'axios'
const { VITE_BASE_URL } = process.env

const apiClient = axios.create({
    baseURL: VITE_BASE_URL
})

console.log('VITE_BASE_URL', VITE_BASE_URL)

// request interceptor to add token to request headers
// apiClient.interceptors.request.use(
//   async (config) => {
//     // Implement function to get token
//     const token = {
//       accessToken: "my-access-token",
//       refreshToken: "my-refresh-token",
//     };

//     if (token?.accessToken) {
//       config.headers.Authorization = `Bearer ${token?.accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // response interceptor intercepting 401 responses, refreshing token and retrying the request
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // Implement logic here

//     return Promise.reject(error);
//   }
// );

export default apiClient
