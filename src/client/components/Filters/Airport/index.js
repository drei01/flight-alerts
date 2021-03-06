import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';
import api from '../../../api';
import styles from './style.less';
import c from 'classnames';

const renderSuggestion = (suggestion) => {
  return suggestion.name;
};

const getSuggestionValue = (suggestion) => {
  suggestion.code;
};

export default function({city, onChange}) {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState('');
  const handleSearch = ({value}) => {
    api.skypicker.queryAirports(value).then((results) => {
      setOptions(results);
    });
  };

  const handleChange = (_event, {newValue}) => {
    if (newValue || newValue === '') {
      setValue(newValue);
    }
  };

  const handleSuggestionSelected = (_event, {suggestion: {name, code, type}}) => {
    setValue(name);
    onChange({code, type});
  };

  return (
    <div className={styles.wrapper}>
      <Autosuggest
        suggestions={options}
        onSuggestionsFetchRequested={handleSearch}
        onSuggestionSelected={handleSuggestionSelected}
        onSuggestionsClearRequested={() => setOptions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          className: c('col-md-6', styles.input),
          placeholder: city || 'Airport or Place...',
          onChange: handleChange,
          value
        }}
      />
    </div>
  );
}
