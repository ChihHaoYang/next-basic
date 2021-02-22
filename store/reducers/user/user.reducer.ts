import * as actions from '../../../actions';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.types';

const initialState: UserState = {
  isLoggedIn: false
}

function loginSuccess(state: UserState, action: PayloadAction<string>) {
  return {
    ...state,
    isLoggedIn: true
  }
}

const user = createReducer(initialState, {
})

export default user;