import Header from './Header'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import GraphController from './GraphController'

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <GraphController />
      </LocalizationProvider>
    </>
  )
}

export default App
