import {createSlice} from '@reduxjs/toolkit'
import { isContainEmptyKey } from '../../utils/isContainEmptyKey';
import { modalPop } from '../../utils/modalPop';

const currentInfoInit = {
  'first-name': "",
  'last-name': "",
  'date-of-birth': "",
  'street': "",
  'city': "",
  'state': "",
  'zip-code': "",
  'start-date': "",
  'department': ""
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    currentInfo: currentInfoInit,
    List : []
  },
  reducers: {
    getEmployeeInfo: (state, action) => {
      state.currentInfo['first-name'] = action.payload['first-name'] ;
      state.currentInfo['last-name'] = action.payload['last-name']
      state.currentInfo['date-of-birth'] = action.payload['date-of-birth'];
    },
    getEmployeeAdress: (state, action) => {
      state.currentInfo['street'] = action.payload['street'];
      state.currentInfo['city'] = action.payload['city'];
      state.currentInfo['state'] = action.payload['state'];
      state.currentInfo['zip-code'] = action.payload['zip-code'];
    },
    getEmployeeProInfo: (state, action) => {
      state.currentInfo['start-date'] = action.payload['start-date'];
      state.currentInfo['department'] = action.payload['department'];
    },
    addNewEmployee: (state) => {
      if(!isContainEmptyKey(state.currentInfo)){
        state.List.push(state.currentInfo);
      }else{
        modalPop("failure")
      }
    },
    resetState: (state) => {
      state.currentInfo = currentInfoInit;
    }
  }
})

export const {
  addNewEmployee, getEmployeeInfo, getEmployeeAdress, getEmployeeProInfo, resetState
} = employeeSlice.actions;

export default employeeSlice.reducer;