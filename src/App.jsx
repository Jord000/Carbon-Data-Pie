import { useState } from 'react'
import DateRange from './DateRange'
import LocationPicker from './LocationPicker'
import Header from './Header'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CarbonGeneration from './CarbonGeneration';

function App() {
return <><LocalizationProvider dateAdapter={AdapterDayjs}>
  <Header/><CarbonGeneration/>
</LocalizationProvider></> 
}

export default App
