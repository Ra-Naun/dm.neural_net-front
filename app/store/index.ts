import { configureStore, combineReducers, AnyAction} from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import type { StoreState } from './types';
import convertReducer from './convertStore';

const combinedReducer = combineReducers<StoreState>({
  convertStore: convertReducer,
});

const isProd = process.env.NODE_ENV === "production";

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    devTools: !isProd
  });

export const wrapper = createWrapper(makeStore, { debug: !isProd });
