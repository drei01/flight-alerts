import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';
import api from '../../../api';
import styles from './style.less';

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

  const handleSuggestionSelected = (_event, {suggestion: {code, type}}) => {
    onChange({code, type});
  };

  const handleClearSuggestions = () => {
    setOptions([]);
  };

  return (
    <Autosuggest
      suggestions={options}
      onSuggestionsFetchRequested={handleSearch}
      onSuggestionSelected={handleSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionsClearRequested={handleClearSuggestions}
      inputProps={{
        className: styles.input,
        placeholder: city || 'Airport or Place...',
        onChange: handleChange,
        value
      }}
    />
  );
}
