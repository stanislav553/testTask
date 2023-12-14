import {configureStore} from '@reduxjs/toolkit'
import {requestApi} from './requsers/request.api'
import devicesReducer from './reducers/devicesReducer'
export const store = configureStore({
  reducer: {
    [requestApi.reducerPath]: requestApi.reducer,
    devicesReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(requestApi.middleware)
})
