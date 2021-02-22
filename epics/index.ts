import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { AnyAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../store/reducers';

import * as actions from '../actions';

const setUserLocaleEpic: Epic<AnyAction, AnyAction, RootState> = action$ =>
  action$.pipe(
    ofType(actions.login),
    switchMap(async action => {
      await new Promise(res => {
        setTimeout(() => { res(0) }, 3000)
      });
      return actions.loginSuccess()
    })
  )

const rootEpic: Epic<AnyAction, AnyAction, RootState> = combineEpics(
  setUserLocaleEpic,
)

export default rootEpic;