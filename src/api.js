import axios from 'axios'

const carbonApi = axios.create({
    baseURL:   `https://api.carbonintensity.org.uk/`
})


export const getCarbonByRegion = (dateFrom,dateTo,location)=>{
    console.log('request made')
    return carbonApi.get(`/regional/intensity/${dateFrom}/${dateTo}/regionid/${location}`).then(({data:{data:{data}}})=>{
        return data
    })


}