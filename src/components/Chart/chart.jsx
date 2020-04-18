import React,{useEffect,useState} from 'react';
import {getDailyData} from '../../api/index'



const Charts = ()=>{

    const [dailyData,setDailyData] = useState({});

    const getAllData = async () =>{
        const response = await getDailyData();
        setDailyData(response)
        console.log(response)
    }

    useEffect(()=>{
        getAllData();
    },[])


    return(
        <h1>Charts</h1>
    )
}

export default Charts;