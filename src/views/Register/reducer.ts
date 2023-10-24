import { CHANGE_CONFIRM_PASSWORD, CHANGE_EMAIL, CHANGE_PASSWORD } from 'types';

export type InitialStateType = {
  email: string;
  password: string;
  confirmPassword: string;
};

type PayloadActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const registerReducer = (
  state: InitialStateType,
  action: PayloadActionType
) => {
  if (action.type === CHANGE_EMAIL) {
    return {
      ...state,
      email: action.payload.CHANGE_EMAIL,
    };
  }
  if (action.type === CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload.CHANGE_PASSWORD,
    };
  }
  if (action.type === CHANGE_CONFIRM_PASSWORD) {
    return {
      ...state,
      confirmPassword: action.payload.CHANGE_CONFIRM_PASSWORD,
    };
  }
  return state;
};
