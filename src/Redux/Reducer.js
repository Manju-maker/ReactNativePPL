const initialState = {
  token: null,
  userInfo: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setToken':
      return {...state, token: action.data};
    case 'SetUserData':
      return {...state, userInfo: action.data};
    case 'UserLogout':
      console.warn('Action--', action.data);
      return {...state, user: null, userInfo: null};
  }
 
};
export default reducer;
