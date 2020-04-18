import React , {Component} from 'react'
import {Cards,CountryPicker,Chart} from "./components/index"
import styles from './App.module.css'
import {fetchData} from "./api/index"
class App extends Component {

    state = {
        data : {}
    }

    async componentDidMount(){
        const respose = await fetchData()
        this.setState({
            data:respose
        })
        // console.log(respose)
    }
    
    render(){
        console.log(this.state.data)
        const {data} = this.state
        return (
            <div className={styles.container}>
                
                    <Cards data={data}/>
                    <CountryPicker/>
                    <Chart/>
                
            </div>
        )
    }
}

export default App;