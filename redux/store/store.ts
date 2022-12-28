import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import dataBuyerReducer from "../dataBuyer/dataBuyerSlice";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	dataBuyer: dataBuyerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper<AppStore>(makeStore);

const persistor = persistStore(makeStore());
export { makeStore, persistor };
