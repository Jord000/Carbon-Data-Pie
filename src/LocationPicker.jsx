import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import * as React from 'react';

export default function LocationPicker({ location, setLocation }) {
  const handleChange = (event, newValue) => {
    setLocation(newValue);
  };

  return (
    <Select
      defaultValue="15"
      onChange={handleChange}
    >
      <Option value="15">England</Option>
      <Option value="16">Scotland</Option>
      <Option value="17">Wales</Option>
    </Select>
  );
}

//expand region id to be full object map from api
