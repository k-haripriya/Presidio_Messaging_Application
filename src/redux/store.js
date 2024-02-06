import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import SetUserReducer from './slices/setUserSlice';
import channelsReducer from "./slices/channelsSlice";
import peopleReducer from "./slices/peopleSlice";


  const persistConfig = {
    key: "root", 
    storage: storage, 
  };

  const rootReducer = combineReducers( {
    user: userReducer,
    setuser: SetUserReducer,
    channels: channelsReducer,
    people: peopleReducer,

  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  
  export const persistor = persistStore(store);
  
  export default store;