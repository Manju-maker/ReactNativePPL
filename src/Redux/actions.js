export const setUser = userData => {
  return {type: 'SetUserData', data: userData};
};
export const LogoutUser = () => {
  return {type: 'UserLogout'};
};
