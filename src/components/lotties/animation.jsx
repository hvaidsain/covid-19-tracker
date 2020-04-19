import React from 'react'
import Lottie from 'react-lottie';
import animationData from "./corona2.json"


export default class CoronaAnimation extends React.Component {
 
   
    render() {
   
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   
      return(
        <div style={{width:"200px" , textAlign:"center"}}>
            <Lottie
            options={defaultOptions}
            width={this.props.width}
            height={"200px"}

            />
            <h4>COVID-19</h4>
        </div>
      )
    }
  }