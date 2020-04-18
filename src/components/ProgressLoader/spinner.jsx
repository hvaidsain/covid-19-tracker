import React from 'react'
import styles from './spinner.module.css'
import {CircularProgress} from "@material-ui/core";

const Spinner = ()=>{


    return(
        <div className={styles.container} >
            <CircularProgress />
        </div>
    )
}

export default Spinner;