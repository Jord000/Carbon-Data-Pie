import { PieChart, Pie } from 'recharts';

function CarbonIntensity({ graphData }) {
  const graphDataFormatting = [
    { fuel: 'biomass', perc: 5 },
    { fuel: 'coal', perc: 200 },
    { fuel: 'imports', perc: 100 },
    { fuel: 'gas', perc: 60 },
    { fuel: 'nuclear', perc: 50 },
    { fuel: 'other', perc: 40 },
    { fuel: 'hydro', perc: 20 },
    { fuel: 'solar', perc: 100 },
    { fuel: 'wind', perc: 1 },
  ];

  const graphMap = graphData.map((data) => {
    return data.generationmix;
  });
  graphMap.forEach((fuelObject) => {
    //foor loop and add to each object
  });

  let renderLabel = function(entry) {
    return entry.fuel;
}

   const CarbonGraph = () => (
    <PieChart
      width={400}
      height={400}
    >
      <Pie
        data={graphDataFormatting}
        dataKey="perc"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label={renderLabel}
      />
    </PieChart>
  );
  return <CarbonGraph />;
}

export default CarbonIntensity;
