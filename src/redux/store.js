import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from './Slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
