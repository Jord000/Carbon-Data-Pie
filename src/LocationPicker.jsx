import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import * as React from 'react';

export default function LocationPicker({ location, setLocation }) {
  const handleChange = (event, newValue) => {
    setLocation(newValue);
  };

  return (
    <div className='country-selector'>
    <Select
      sx={{width:1}}
      defaultValue="15"
      onChange={handleChange}
    >
      <Option value="15">England</Option>
      <Option value="16">Scotland</Option>
      <Option value="17">Wales</Option>
    </Select>
    </div>
  );
}


