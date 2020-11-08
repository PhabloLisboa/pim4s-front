export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USER_DATA = "SET_USER_DATA";

export function login(token, user) {
  localStorage.setItem("token", token);
  return {
    type: LOGIN,
    token,
    user,
    type: LOGIN,
  };
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
    token: null,
    type: LOGOUT,
  };
}

export function setUserData(user) {
  return {
    type: SET_USER_DATA,
    user,
  };
}
