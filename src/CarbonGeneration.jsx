import DateRange from "./DateRange"
import LocationPicker from "./LocationPicker"
import CarbonIntensity from './CarbonIntesity'
import { useState } from "react"

function CarbonGeneration (){
    const [date, setDate] = useState()
    const [location, setLocation] = useState()

return<>
    <CarbonIntensity/>
    <DateRange setDate={setDate}/>
    <LocationPicker setLocation={setLocation}/></>
}

export default CarbonGeneration