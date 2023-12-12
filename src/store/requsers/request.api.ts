import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const requestApi = createApi({
  reducerPath: 'autotracker',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gps.autotracker.group/api/devices',
    headers: {
      Authorization:
        'Bearer RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ'
    }
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchDevices: build.query({
      query: () => ({
        url: ``,
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
        body
      })
    })
  })
})

export const {
  useSearchDevicesQuery,
  useDeleteDeviceMutation,
  useAddDeviceMutation
} = requestApi
