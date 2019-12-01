import React from 'react';
import Switch from 'react-switch';

export default function ReturnFlightFilter({checked, onChange}) {
  return <Switch checked={checked} onChange={onChange} />;
}
