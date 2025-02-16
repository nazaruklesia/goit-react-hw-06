import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { PERSIST, PURGE, REGISTER } from "redux-persist/es/constants";

const contactsPersistConfig = {
    key: "contacts",
    storage,
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);