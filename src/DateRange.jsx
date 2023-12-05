import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function DateRange({ dateFrom, setDateFrom, setDateTo, dateTo }) {
  console.log(dateFrom, dateTo);
  const errorMessage = 'Please select a time frame within 40 days';
  


  return (
    <>
      <DatePicker
        value={dayjs(dateFrom)}
        onChange={(newValue) => setDateFrom(newValue.$d.toISOString())}
        format="DD-MM-YYYY"
        label="From"
        slotProps={{
          textField: {
            helperText: errorMessage,
          },
        }}
        minDate={dayjs(dateTo).subtract(40, 'day')}
        maxDate={dayjs(dateTo).subtract(1, 'day')}
      />
      <DatePicker
        value={dayjs(dateTo)}
        onChange={(newValue) => setDateTo(newValue.$d.toISOString())}
        format="DD-MM-YYYY"
        label="To"
        maxDate={dayjs().add(2, 'day')}
      
      />
    </>
  );
}

export default DateRange;

//date range improvements - limit 30 days max and dont allow same day
