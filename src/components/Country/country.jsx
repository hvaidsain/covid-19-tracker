import React,{useState,useEffect} from 'react'
import {Select,FormControl,NativeSelect} from '@material-ui/core'
import styles from "./country.module.css"
import {getAllCountries} from "../../api/index"


const Country = (props)=>{

    const [countries,setCountries] = useState([])

    const getCountries = async()=>{
        const response = await getAllCountries();
        console.log("countries",response.countries)
        setCountries(response.countries)
    }
    

    useEffect(()=>{
        getCountries();
    },[])



    return(
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e)=>props.handleCountryChange(e.target.value)} >
                <option value='' >global</option>
                {countries.map((country,i)=> <option key={i} value={country.name} >{country.name}</option> )}
            </NativeSelect>
        </FormControl>
    )
} 

export default Country;