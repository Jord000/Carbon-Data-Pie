import { Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

function CarbonIntensity({ graphData, isLoading }) {
  const graphDataFormatting = [
    { label: 'biomass', value: 0 },
    { label: 'coal', value: 0 },
    { label: 'imports', value: 0 },
    { label: 'gas', value: 0 },
    { label: 'nuclear', value: 0 },
    { label: 'other', value: 0 },
    { label: 'hydro', value: 0 },
    { label: 'solar', value: 0 },
    { label: 'wind', value: 0 },
  ]

  const graphMap = graphData.map((data) => {
    return data.generationmix
  })

  graphMap.forEach((fuelArray, index) => {
    fuelArray.forEach((fuel) => {
      for (const element of graphDataFormatting) {
        if (element.label === fuel.fuel) {
          element.value += fuel.perc
          element.value = Number(parseFloat(element.value).toFixed(2))
        }
      }
    })
    if (graphData.length - 1 === index) {
      for (const element of graphDataFormatting) {
        element.perc = Number((element.perc / graphData.length).toFixed(2))
      }
    }
  })

  const myColours = [
    '#dcf2b3',
    '#352f57',
    '#f5d0d3',
    '#1f3399',
    '#e9b9eb',
    '#943837',
    '#7bede7',
    '#eb921e',
    '#b3f2ba',
  ]

  const CarbonGraph = () => (
    <PieChart
      colors={myColours}
      series={[
        {
          data: graphDataFormatting,
        },
      ]}
      margin={{
        left: 10,
        top: 20,
        right: 100,
        bottom: 20,
      }}
      slotProps={{
        legend: {
          padding: 10,
          direction: 'column',
          position: { horizontal: 'right' },
          labelStyle: {
            fontSize: '2.8vw',
            padding: 1,
          },
        },
      }}
    />
  )
  if (isLoading) {
    return (
      <Box sx={{ width: '70%' ,marginBottom:'10px',marginTop:'12px'}}>
        <h2>Loading data, thank you for your patience...</h2>
        <LinearProgress />
      </Box>
    )
  } else return <CarbonGraph />
}

export default CarbonIntensity
