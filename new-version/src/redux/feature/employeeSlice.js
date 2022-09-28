import {createSlice} from '@reduxjs/toolkit'

export const employeeListSlice = createSlice({
  name: 'employeeList',
  initialState: {
    employeeList : []
  },
  reducers: {
    getNewEmployee: (state, action) => {
      state.employeeList.push(action.payload)
    }
  }
})

export const {
  getNewEmployee,
} = employeeListSlice.actions;

export default employeeListSlice.reducer;