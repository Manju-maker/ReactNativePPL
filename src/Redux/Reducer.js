const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetUserData':
      return {...state, user: action.data};
    case 'UserLogout':
      console.warn('Action--', action.data);
      return {...state, user: null};
  }
};
export default reducer;
