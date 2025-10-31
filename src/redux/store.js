import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loaderSlice from "./slices/loaderSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  cart: cartSlice,
});

// List of slices to persist
const persistWhitelist = [];

const persistConfig = {
  key: "root",
  storage,
  whitelist: persistWhitelist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
