import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';
import styles from './style.m.less';
import c from 'classnames';

export default function DateFilter({name, placeholder, date, onChange}) {
  const [focusedInput, setFocusedInput] = useState(false);
  const [isWholeMonth, setIsWholeMonth] = useState(false);
  const isSmall = window.matchMedia('(max-width: 400px)').matches;

  return (
    <div className={styles.wrapper}>
      {isWholeMonth && (
        <label for={name} className={c(styles.monthLabel, 'DateInput_input')}>
          {date.format('MMM YYYY')}
        </label>
      )}
      <SingleDatePicker
        date={date}
        id={name}
        placeholder={placeholder}
        onDateChange={(date) => {
          setIsWholeMonth(false);
          onChange(date);
        }}
        focused={focusedInput}
        onFocusChange={({focused}) => setFocusedInput(focused)}
        withPortal={isSmall}
        small={isSmall}
        numberOfMonths={isSmall ? 1 : 2}
        renderMonthText={(day) => (
          <React.Fragment>
            {day.format('MMM YYYY')}{' '}
            <a
              onClick={(e) => {
                e.stopPropagation();
                setIsWholeMonth(true);
                setFocusedInput(false);
                onChange(day.clone().day(1), {isWholeMonth: true});
              }}
              role="button"
              tabIndex="0"
              className={styles.monthLink}
            >
              Whole Month
            </a>
          </React.Fragment>
        )}
      />
    </div>
  );
}
