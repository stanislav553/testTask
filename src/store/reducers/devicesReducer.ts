import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  devices: []
}
const devicesReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    devices: (state, action) => {
      state.devices = action.payload
    }
  }
})

export const {devices} = devicesReducer.actions
export default devicesReducer.reducer
