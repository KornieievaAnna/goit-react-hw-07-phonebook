import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ['contacts'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactReducer
// );


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);