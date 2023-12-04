import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function DateRange({ dateFrom, setDateFrom, setDateTo, dateTo }) {
  return (
    <>
      <DatePicker
        value={dayjs(dateFrom)}
        onChange={(newValue) => setDateFrom(newValue.$d.toISOString())}
        format="DD-MM-YYYY"
        label="From"
      />
      <DatePicker
        value={dayjs(dateTo)}
        onChange={(newValue) => setDateTo(newValue.$d.toISOString())}
        format="DD-MM-YYYY"
        label="To"
      />
    </>
  );
}

export default DateRange;


//date range improvements - limit 30 days max and dont allow same day