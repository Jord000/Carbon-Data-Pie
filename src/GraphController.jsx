import DateRange from './DateRange';
import LocationPicker from './LocationPicker';
import CarbonIntensity from './CarbonIntesity';
import { useEffect, useState } from 'react';

function GraphController() {
  const [dateFrom, setDateFrom] = useState('2023-12-03T13:00Z');
  const [dateTo, setDateTo] = useState('2023-12-04T13:00Z');
  const [location, setLocation] = useState('15');
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    fetch(
      `GET https://api.carbonintensity.org.uk/regional/intensity/${dateFrom}/${dateTo}/regionid/${location}`
    ).then((data) => {
      setGraphData(data.json());
    });
  });

  return (
    <>
      <CarbonIntensity graphData={graphData} />
      <DateRange
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
      />
      <LocationPicker
        location={location}
        setLocation={setLocation}
      />
    </>
  );
}

export default GraphController;
