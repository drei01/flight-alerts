import React, {useState} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import styles from './style.less';
import api from '../../../api';

export default function({onChange}) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleSearch = (query) => {
    setLoading(true);
    api.airports.queryAirports(query).then((results) => {
      setLoading(false);
      setOptions(results);
    });
  };

  const handleChange = (selectedOptions) => {
    if (selectedOptions && selectedOptions[0]) {
      onChange(selectedOptions[0]);
    }
  };

  return (
    <AsyncTypeahead
      id="Airport"
      minLength={2}
      isLoading={loading}
      options={options}
      labelKey="name"
      selectHintOnEnter={true}
      filterBy={['name', 'city', 'country', 'iata']}
      multiple={false}
      onSearch={handleSearch}
      placeholder="Airport..."
      onChange={handleChange}
      className={styles.wrapper}
      inputProps={{className: styles.input}}
    />
  );
}
