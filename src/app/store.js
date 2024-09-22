import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../appFeatures/item';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
