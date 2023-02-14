import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { cartReducer } from './slices/cartSlice';
import { servicesReducer } from './slices/servicesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    services: servicesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
