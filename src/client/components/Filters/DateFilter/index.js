import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';

export default function DateFilter({name, placeholder, date, onChange, startDate}) {
  const [focusedInput, setFocusedInput] = useState(false);
  return (
    <SingleDatePicker
      date={date}
      startDate={startDate}
      id={name}
      placeholder={placeholder}
      onDateChange={onChange}
      focused={focusedInput}
      onFocusChange={({focused}) => setFocusedInput(focused)}
    />
  );
}
