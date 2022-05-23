import { createSlice, PayloadAction} from '@reduxjs/toolkit';

import type { RootState } from '../types';
import type { IConvertStore } from './types';
import initialState from './initialState';

export const convertStore = createSlice({ // Можно поменять хотя мне так нравится
  name: 'ConvertStore',
  initialState,
  reducers: {
    setConvertKey: (state, action: PayloadAction<IConvertStore>) => {
      state.convertKey = action.payload.convertKey;
    },
    setDownloadUrl: (state, action: PayloadAction<IConvertStore>) => {
      state.downloadUrl = action.payload.downloadUrl;
    },
  },
})

export const { setConvertKey, setDownloadUrl } = convertStore.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectConvertKey = (state: RootState): string => {
  return state.convertStore.convertKey;
};


export const selectDownloadUrl = (state: RootState): string => {
  return state.convertStore.downloadUrl;
};

export default convertStore.reducer;
