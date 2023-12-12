import {configureStore} from '@reduxjs/toolkit'
import {requestApi} from './requsers/request.api'
import {setupListeners} from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    [requestApi.reducerPath]: requestApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(requestApi.middleware)
})

setupListeners(store.dispatch)
