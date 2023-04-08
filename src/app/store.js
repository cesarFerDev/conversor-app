import { configureStore } from '@reduxjs/toolkit';
import { SavedData } from '../features/SavedData/SavedDataSlice';

export const store = configureStore({
  reducer: {
    savedData: SavedData.reducer 
  },
});
