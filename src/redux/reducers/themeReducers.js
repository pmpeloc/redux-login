import actionsTypes from '../actions/actionsTypes';

export const darkModeReducer = (state = { status: null }, action) => {
  switch (action.type) {
    case actionsTypes.ON_DARK_MODE:
      return { status: action.payload };
    case actionsTypes.OFF_DARK_MODE:
      return { status: action.payload };
    default:
      return state;
  }
};
