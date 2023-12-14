import DateRange from './DateRange';
import LocationPicker from './LocationPicker';
import CarbonIntensity from './CarbonIntesity';
import { useEffect, useState } from 'react';
import { getCarbonByRegion } from './utils/api';


function GraphController() {
  const [dateFrom, setDateFrom] = useState(new Date(2023, 10, 1).toISOString());
  const [dateTo, setDateTo] = useState(new Date(2023, 10, 2).toISOString());
  const [location, setLocation] = useState('15');
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getCarbonByRegion(dateFrom, dateTo, location).then((data) => {
      setGraphData(data)
      setIsLoading(false);
    });
  }, [dateFrom, dateTo, location]);

  return (
    <><div className='Graph-Controller'>
      <CarbonIntensity graphData={graphData} isLoading={isLoading} />
    </div>

      <DateRange
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
      />
      <div className='location-container'>
        <LocationPicker
          location={location}
          setLocation={setLocation}
        />
      </div>
    </>
  );
}

export default GraphController;
