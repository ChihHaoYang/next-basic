import { useMemo } from 'react';
import { createStore, applyMiddleware, Middleware } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
import reducer, { RootState } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import epic from '../epics';

const middlewares: Middleware[] = [];

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState)

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store

//   return _store
// }

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

middlewares.push(epicMiddleware);
const store = createStore(reducer, applyMiddleware(...middlewares));
epicMiddleware.run(epic);

export default store;