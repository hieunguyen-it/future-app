export const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  };
  
  export const setLocalStorage = <T>(key: string, value: string | number | Array<T>) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  
  export const keyLocalStore = {
    token: 'access_token',
    refreshToken: 'refresh_token',
  };
  