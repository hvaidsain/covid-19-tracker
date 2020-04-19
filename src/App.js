import React , {Component} from 'react'
import {Cards,CountryPicker,Chart,Piechart,Footer} from "./components/index"
import styles from './App.module.css'
import {fetchData} from "./api/index"
import image1 from "./images/covid1.png"
import Spinner from "./components/ProgressLoader/spinner"
import CoronaAnimation from './components/lotties/animation'

class App extends Component {

    state = {
        data : null,
        country:""
    }

    async componentDidMount(){
        const respose = await fetchData()
        this.setState({
            data:respose
        })
        // console.log(respose)
    }

    handleCountryChange = async(country)=>{
        console.log(country);
        const respose = await fetchData(country)
        this.setState({
            data:respose,
            country:country
        })
    }
    
    render(){
        console.log(this.state.data)
        const {data,country} = this.state
        return (
            this.state.data ? (
                <div className={styles.container}>
                    <CoronaAnimation/>
                    {/* <Piechart data={data}/> */}
                    {/* <img src={image1} alt="COVID-19" className={styles.image} ></img> */}
                    {/* <p>{`${country}` || `Global`} Stats</p> */}
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country}/>
                    <Footer/>
            </div>
            ):(<Spinner/>)
            
            
        )
    }
}

export default App;