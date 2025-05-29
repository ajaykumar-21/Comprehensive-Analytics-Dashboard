import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherApi";
import { newsApi } from "../services/newsApi";
import { financeApi } from "../services/financeApi";

// Create the Redux store
export const store = configureStore({
  reducer: {
    // Add the API reducers under their specific paths
    [weatherApi.reducerPath]: weatherApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [financeApi.reducerPath]: financeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // Add the RTK Query middlewares for caching, invalidation, etc.
      .concat(weatherApi.middleware)
      .concat(newsApi.middleware)
      .concat(financeApi.middleware),
});

// Define the RootState type (for typing useSelector)
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type (for typing useDispatch)
export type AppDispatch = typeof store.dispatch;
