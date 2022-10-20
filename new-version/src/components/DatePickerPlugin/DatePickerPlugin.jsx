import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux';
import { setDateOfBirth, setPlaceHolderBirthDay, setPlaceHolderStartDate } from '../../redux/feature/formularySlice';
import { setStartDate as setSDate } from '../../redux/feature/formularySlice';

const DatePickerPlugin = ({id}) => {
  const [startDate, setStartDate] = useState();
  const dispatch = useDispatch();
  const placeHolderBirthday = useSelector(state => state.formulary.placeHolderBirthday);
  const PlaceHolderStartDate = useSelector(state => state.formulary.placeHolderStartDate)
 

  const dPicker = {
    localString: 'En',
    placeHolder : () => id === 'date-of-birth' ? placeHolderBirthday : PlaceHolderStartDate,
    autoComplete: 'off',
    dropdownMode: 'select'
  }

  const handleChange = (date) => {
    setStartDate(date);
    const dateFromForm = new Date(date).toLocaleDateString(dPicker.localString);
    if(id === 'date-of-birth'){
      dispatch(setDateOfBirth(dateFromForm));
      dispatch(setPlaceHolderBirthDay(dateFromForm));
    } else{
      dispatch(setSDate(dateFromForm));
      dispatch(setPlaceHolderStartDate(dateFromForm));
    }
  }

  return (
    <DatePicker
      id={id}
      autoComplete={dPicker.autoComplete}
      placeholderText={dPicker.placeHolder()}
      selected={startDate}
      onChange={(date) => handleChange(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode={dPicker.dropdownMode}
    />
  );
}

export default DatePickerPlugin;
