import {
  CHANGE_ADDRESS,
  CHANGE_BIRTHDAY,
  CHANGE_CITY,
  CHANGE_CONFIRM_PASSWORD,
  CHANGE_COUNTY,
  CHANGE_PASSWORD,
  CHANGE_USERNAME,
  CHANGE_COUNTRY,
  CHANGE_GENDER,
} from 'types';

export type InitialStateType = {
  username: string;
  password: string;
  confirmPassword: string;
  birthday: string;
  gender: string;
  address: string;
  city: string;
  county: string;
  country: string;
};

type PayloadActionType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export const profileReducer = (
  state: InitialStateType,
  action: PayloadActionType
) => {
  if (action.type === CHANGE_USERNAME) {
    return {
      ...state,
      username: action.payload.CHANGE_USERNAME,
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
  if (action.type === CHANGE_BIRTHDAY) {
    return {
      ...state,
      birthday: action.payload.CHANGE_BIRTHDAY,
    };
  }
  if (action.type === CHANGE_ADDRESS) {
    return {
      ...state,
      address: action.payload.CHANGE_ADDRESS,
    };
  }
  if (action.type === CHANGE_GENDER) {
    return {
      ...state,
      gender: action.payload.CHANGE_GENDER,
    };
  }
  if (action.type === CHANGE_CITY) {
    return {
      ...state,
      city: action.payload.CHANGE_CITY,
    };
  }
  if (action.type === CHANGE_COUNTY) {
    return {
      ...state,
      county: action.payload.CHANGE_COUNTY,
    };
  }
  if (action.type === CHANGE_COUNTRY) {
    return {
      ...state,
      country: action.payload.CHANGE_COUNTRY,
    };
  }

  return state;
};
