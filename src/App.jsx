import Header from './Header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GraphController from './GraphController';


function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='master-container'>
          <Header />
          <GraphController />
        </div>
      </LocalizationProvider>
    </>
  );
}

export default App;
