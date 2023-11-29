export const setToken = (token: string) =>
  localStorage.setItem("token", JSON.stringify(token));
export const getToken = () => JSON.parse(localStorage.getItem("token") || "");
