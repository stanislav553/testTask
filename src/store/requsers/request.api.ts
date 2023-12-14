import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {token} from '../../constants/constants'
export const requestApi = createApi({
  reducerPath: 'autotracker',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gps.autotracker.group/api/devices',
    headers: {
      Authorization: token
    }
  }),

  endpoints: build => ({
    searchDevices: build.query({
      query: (id: string) => ({
        url: id ? `/${id}` : '',
        method: 'GET'
      })
    }),
    deleteDevice: build.mutation({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE'
      })
    }),
    addDevice: build.mutation({
      query: body => ({
        url: ``,
        method: 'POST',
        body,
        headers: {
          REQUEST_BODY_SCHEMA: 'application/json'
        }
      })
    })
  })
})

export const {
  useSearchDevicesQuery,
  useDeleteDeviceMutation,
  useAddDeviceMutation,
  useLazySearchDevicesQuery
} = requestApi
