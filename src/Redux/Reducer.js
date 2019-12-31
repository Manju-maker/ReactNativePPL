const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  console.warn('>>>>>Data>>', action);
  switch (action.type) {
    case 'SetUserData':
      return {...state, user: action.data};
  }
};
export default reducer;
