import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';

export default function DateFilter({name, placeholder, date, onChange, startDate}) {
  const [focusedInput, setFocusedInput] = useState(false);
  const isSmall = window.matchMedia('(max-width: 400px)').matches;

  return (
    <SingleDatePicker
      date={date}
      startDate={startDate}
      id={name}
      placeholder={placeholder}
      onDateChange={onChange}
      focused={focusedInput}
      onFocusChange={({focused}) => setFocusedInput(focused)}
      withPortal={isSmall}
      small={isSmall}
      numberOfMonths={isSmall ? 1 : 2}
    />
  );
}
