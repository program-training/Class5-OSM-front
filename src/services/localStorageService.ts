export const setLocalStorageToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const check = localStorage.getItem("token");
  return check == null ? "loggedout" : "loggedin";
};
export const getRealToken = () => {
  const check = localStorage.getItem("token");
  return check == null ? "" : check;
};
export const deleteToken = () => {
  localStorage.removeItem("token");
};
