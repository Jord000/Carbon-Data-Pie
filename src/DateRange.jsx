import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import Container from '@mui/material/Container'

function DateRange({ dateFrom, setDateFrom, setDateTo, dateTo }) {
  const errorMessage = 'Please select a time frame within 40 days'

  return (
    <div className="date-selector">
      <Container
        sx={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          marginBottom:'10px',
          padding:'0'
        }}
      >
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
          sx={{width:'90%'}}
        />
      </Container>
      <Container
        sx={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          padding:'0',
          marginBottom:'8px',
        }}
      >
        <DatePicker
          value={dayjs(dateTo)}
          onChange={(newValue) => setDateTo(newValue.$d.toISOString())}
          format="DD-MM-YYYY"
          label="To"
          maxDate={dayjs().add(2, 'day')}
          slotProps={{
            textField: {},
          }}
          sx={{width:'90%'}}
        />
      </Container>
    </div>
  )
}

export default DateRange

//date range improvements - limit 30 days max and dont allow same day
