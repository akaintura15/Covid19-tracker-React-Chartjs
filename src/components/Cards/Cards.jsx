import React from 'react'
import {Card,CardContent,Typography,Grid} from "@material-ui/core"
import styles from "./Cards.module.css"
import CountUp from "react-countup"
import cx from "classnames"

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {  //instead of data and using data.confirmed.value destructuring it
   if(!confirmed){
       return 'Loading...';
   }
    return (
        <div className={styles.container}>
        <Grid container spacing={4} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Infected</Typography>
        
        <Typography variant="h5">
        <CountUp  start={0} end={confirmed.value} duration={2} seperator=","/>
        </Typography>
        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
        <Typography variant="body2">Number of active cases of COVID-19 </Typography>
        </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
        <Typography variant="h5">
        <CountUp  start={0} end={recovered.value} duration={2} seperator=","/>
        </Typography>
        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
        <Typography variant="body2">Number of Recovered of COVID-19 </Typography>
        </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
        <Typography variant="h5">
        <CountUp  start={0} end={deaths.value} duration={2} seperator=","/>
        </Typography>
        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
        <Typography variant="body2">Number of Deaths of COVID-19 </Typography>
        </CardContent>
        </Grid>
        </Grid>            
        </div>
    )
}
export default Cards