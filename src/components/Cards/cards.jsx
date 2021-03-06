import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import moment from 'moment'
import styles from './cards.module.css'
import cx from "classnames"
import Spinner from "../ProgressLoader/spinner"




const Cards = (props) => {
    const { confirmed, recovered, deaths, lastupdate } = props.data

    if (!confirmed) {
        return null
    }
    console.log(props.data)
    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify='center' >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography variant='body2' >Active Cases of Covid-19</Typography>
                        <Typography color='textSecondary' >updated {moment(lastupdate).startOf('hour').fromNow()} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography variant='body2' >Recoveries from Covid-19</Typography>
                        <Typography color='textSecondary' >updated {moment(lastupdate).startOf('hour').fromNow()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography variant='body2' >Deaths due to Covid-19</Typography>
                        <Typography color='textSecondary' >updated {moment(lastupdate).startOf('hour').fromNow()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;