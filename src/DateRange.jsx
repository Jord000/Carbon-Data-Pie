import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateRange({date ,setDate}){


return <><DatePicker
format="DD-MM-YYYY"
label="From"/>
<DatePicker
format="DD-MM-YYYY"
label="To"/>
</>
}

export default DateRange