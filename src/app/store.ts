import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { makeupApi } from '../api/makeupApi';

const store = configureStore({
  reducer: {
    [makeupApi.reducerPath]: makeupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(makeupApi.middleware),
});

setupListeners(store.dispatch);

export default store;