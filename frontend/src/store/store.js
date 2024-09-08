import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import homeReducer from "./homeSlice";
import { userApi } from "../services/userApi";
import { homeApi } from "../services/homeApi";

export default configureStore({
    reducer: {
        users: userReducer,
        homes: homeReducer,
        [userApi.reducerPath]: userApi.reducer,
        [homeApi.reducerPath]: homeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(homeApi.middleware),
});
