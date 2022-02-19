import actionsTypes from './actionsTypes';

export const userLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: actionsTypes.USER_LOGIN_REQUEST });
    const config = {
      method: 'POST',
    };
    const userData = JSON.stringify(email, password);
    try {
      const res = await fetch(
        'https://tiendavirtualmern.herokuapp.com/api/users/login',
        config,
        userData
      );
      const data = await res.json();
      // capturar el error de password e email incorrecto
      dispatch({ type: actionsTypes.USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionsTypes.USER_LOGIN_FAIL, payload: error });
    }
  };
};
