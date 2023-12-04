import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function DateRange({ dateFrom, setDateFrom, setDateTo, dateTo }) {
  return (
    <>
      <DatePicker
        value={dayjs(dateFrom)}
        onChange={(newValue) => setDateFrom(JSON.stringify(newValue.$d))}
        format="DD-MM-YYYY"
        label="From"
      />
      <DatePicker
        value={dayjs(dateTo)}
        onChange={(newValue) => setDateTo(JSON.stringify(newValue.$d))}
        format="DD-MM-YYYY"
        label="To"
      />
    </>
  );
}

export default DateRange;
