import { PieChart, Pie } from 'recharts';

function CarbonIntensity({ graphData }) {
  const graphDataFormatting = [
    { fuel: 'biomass', perc: 0 },
    { fuel: 'coal', perc: 0 },
    { fuel: 'imports', perc: 0 },
    { fuel: 'gas', perc: 0 },
    { fuel: 'nuclear', perc: 0 },
    { fuel: 'other', perc: 0 },
    { fuel: 'hydro', perc: 0 },
    { fuel: 'solar', perc: 0 },
    { fuel: 'wind', perc: 0 },
  ];

  const graphMap = graphData.map((data) => {
    return data.generationmix;
  });

  graphMap.forEach((fuelArray, index) => {
    fuelArray.forEach((fuel) => {
      for (const element of graphDataFormatting) {
        if (element.fuel === fuel.fuel) {
          element.perc += fuel.perc;
          element.perc = Number(parseFloat(element.perc).toFixed(2));
        }
      }
    });
    if (graphData.length - 1 === index) {
      for (const element of graphDataFormatting) {
        element.perc = Number((element.perc / graphData.length).toFixed(2));
      }
    }
  });



  let renderLabel = function (entry) {
    if(entry.perc<5){
      entry.position = 'outside'
  entry.offset = 10}
      
    return entry.fuel;
  };



  const CarbonGraph = () => (
    <PieChart
      width={500}
      height={500}
    >
      <Pie
        data={graphDataFormatting}
        dataKey="perc"
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={150}
        fill="#82ca9d"
        label={renderLabel}
        
      />
    </PieChart>
  );
  return <CarbonGraph />;
}

export default CarbonIntensity;
