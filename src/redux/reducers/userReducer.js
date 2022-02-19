import actionsTypes from '../actions/actionsTypes';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionsTypes.USER_LOGIN_REQUEST:
      return { loading: true, userInfo: null };
    case actionsTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionsTypes.USER_LOGIN_FAIL:
      return { loading: false, userInfo: null, msgError: action.payload };
    default:
      return state;
  }
};
