import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Container from '@mui/material/Container';

function DateRange({ dateFrom, setDateFrom, setDateTo, dateTo }) {
  const errorMessage = 'Please select a time frame within 40 days';

  return (
    <div className="date-selector">
      <Container className='date-container'>
        <DatePicker

          value={dayjs(dateFrom)}
          onChange={(newValue) => setDateFrom(newValue.$d.toISOString())}
          format="DD-MM-YYYY"
          label="From"
          slotProps={{
         
            textField: {
              helperText: errorMessage,
              fullWidth: true
            },
          }}
          minDate={dayjs(dateTo).subtract(40, 'day')}
          maxDate={dayjs(dateTo).subtract(1, 'day')}
        />
      </Container>
      <Container className='date-container'>
        <DatePicker
          value={dayjs(dateTo)}
          onChange={(newValue) => setDateTo(newValue.$d.toISOString())}
          format="DD-MM-YYYY"
          label="To"
          maxDate={dayjs().add(2, 'day')}
          slotProps={{
         
            textField: {
                  fullWidth: true
            },
          }}
        />
      </Container>
    </div>
  );
}

export default DateRange;

//date range improvements - limit 30 days max and dont allow same day
