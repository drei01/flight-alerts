import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';

export default function DateFilter({name, date, onChange}) {
  const [focusedInput, setFocusedInput] = useState(false);
  return (
    <SingleDatePicker
      date={date}
      id={name}
      onDateChange={onChange}
      focused={focusedInput}
      onFocusChange={({focused}) => setFocusedInput(focused)}
    />
  );
}
