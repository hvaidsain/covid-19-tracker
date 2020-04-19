import React,{useEffect,useState} from 'react';
import {getDailyData} from '../../api/index'
import {Line,Bar,Doughnut} from 'react-chartjs-2'
import styles from './chart.module.css'

const Charts = (props)=>{

    const [dailyData,setDailyData] = useState([]);
    const { confirmed, recovered, deaths, lastupdate } = props.data

    const getAllData = async () =>{
        const response = await getDailyData();
        setDailyData(response)
        console.log(response)
    }

    useEffect(()=>{
        getAllData();
    },[])

    const lineChart = (
        dailyData.length &&
        (
            <Line
            data={{
                labels:dailyData.map(({reportDate})=>(reportDate)),
                datasets:[{
                    data:dailyData.map(({confirmed})=>(confirmed.total)),
                    lineTension: 0.1,
                    label:"Infected",
                    borderColor:'rgba(0,0,255,0.5)',
                    fill:true
                },{
                    data:dailyData.map(({deaths})=>(deaths.total)),
                    lineTension: 0.1,
                    label:"Deaths",
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }]
            }}

            />
        )
    )

    const barChart = 
    confirmed &&
        (
        <Bar
        data={{
            // labels:dailyData.map(({reportDate})=>(reportDate)).splice(0,50),
            labels:["Total Infected","Total Recovered","Total Deaths"],

            datasets:[{
                label:"People",
                // data:dailyData.map(({confirmed})=>(confirmed.total)).splice(0,50),
                data:[confirmed.value,recovered.value,deaths.value],
                backgroundColor: ['rgba(255,255,0,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)',],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(255,255,0)','rgba(0,255,0)','rgba(255,0,0)'],
                hoverBorderColor: 'rgba(255,99,132,1)'
            }]
        }}
        options={{
            legend:{display:false},
            maintainAspectRatio: true,
            title:{display:true,text:props.country || "Global"}

          }}
        />
        
        )
    

    const doughnut = (
        confirmed &&
        (
            <Doughnut
            data={{
                labels: [
                    'Infected',
                    'Deaths',
                    'Recovered'
                ],
                datasets: [{
                    data: [confirmed.value,deaths.value,recovered.value],
                    backgroundColor: [
                    '#FFCE56',
                    '#FF6384',
                    '#006400'
                    ],
                    hoverBackgroundColor: [
                    '#FFCE56',
                    '#FF6384',
                    '#006400'
                    ]
                }]
            }}
            options={{
                legend:{display:true},
                maintainAspectRatio: true,
                title:{display:true,text:props.country || "Global"}
    
              }}
            
            />
        )
    )

    return(
        <div className={styles.container}>
            {doughnut}
            <br></br>
            <br></br>
            {barChart}
            {/* {lineChart} */}
        </div>
    )
}

export default Charts;