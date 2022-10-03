import {createSlice} from '@reduxjs/toolkit'

export const FormularySlice = createSlice({
  name: 'formulary',
  initialState: {
    step: 1,
  },
  reducers: {
    setStep : (state, action) => {
      state.step = action.payload;
    }
  },
})

export const {setStep} = FormularySlice.actions;

export default FormularySlice.reducer;