import axios from 'axios'

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) =>{
    try {

        let dynamicUrl = baseUrl
        if(country){
            dynamicUrl = `${baseUrl}/countries/${country}`
        }
        const {data} = await axios.get(dynamicUrl);
        const actualData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastupdate:data.lastUpdate
        }
        return actualData;
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getDailyData = async()=>{
    try {
        const {data} = await axios.get(`${baseUrl}/daily`);
        console.log(data);
        return data
        
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getAllCountries = async()=>{
    try {
        const {data} = await axios.get(`${baseUrl}/countries`);
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
        return error.response
    }
}