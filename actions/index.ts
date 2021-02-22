import { createAction } from '@reduxjs/toolkit';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const login = createAction<void>(actionTypes.LOGIN);
export const loginSuccess = createAction<void>(actionTypes.LOGIN_SUCCESS);