import React, { Component } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../animations/mesa.json';

export default class Exemplo extends Component {


  render() {
    return (
      <div style={{width:'300px'}}> 
           <Lottie
                options={{
                animationData: animation
                }}
            />
      </div>
    );
  }
}
