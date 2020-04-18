import React,{useEffect,useState} from 'react';
import {Line,Bar,Doughnut} from 'react-chartjs-2'
import styles from './chart.module.css'


const Piechart = (props)=>{

    const { confirmed, recovered, deaths, lastupdate } = props.data
    

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
            />
        )
    )

    return(
        <div className={styles.pieContainer}>
            {doughnut}
            <br></br>
            <br></br>
            {/* {barChart} */}
            {/* {lineChart} */}
        </div>
    )
}

export default Piechart