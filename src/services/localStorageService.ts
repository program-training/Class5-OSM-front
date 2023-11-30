export const setLocalStorageToken = (token: string) =>
  localStorage.setItem("token", JSON.stringify(token));
export const getToken = () => {
  const check = localStorage.getItem("token");
  return check == null ? "loggedout" : "loggedin";
};
export const deleteToken = () => {
  localStorage.removeItem("token");
};
