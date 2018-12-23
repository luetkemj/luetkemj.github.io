import React, { Component } from 'react'
import { random } from 'lodash';

export default class Sprinkler extends Component {
  state = {
    text: 'LUETKEMJ ~ Change ~ Is ~ Good',
  }

  render() {
    const sprinkles = this.state.text.split('');

    const fontSize = () => {
      return random(10, 96);
    }

    const transform = (tval) => {
      const translateX = random(-tval, tval);
      const translateY = random(-tval, tval);
      return `rotate(${random(0, 360)}deg) translate(${translateX}vh, ${translateY}vw)`;
    }

    const opacity = () => {
      return random(0.05, 0.2);
    }

    const sprinklesToRender = sprinkles.map((sprinkle, index) => {
      const sprinkleStyle = {
        position: 'absolute',
        display: 'inline-block',
        transition: 'all 1000ms ease-in-out',
        fontSize: fontSize(),
        color: '#50E3C2',
        transform: transform(50),
        opacity: opacity(),
      };
      return (<div key={index} style={sprinkleStyle}>{sprinkle}</div>);
    });

    return (
      <div style={{
        position: 'absolute',
        zIndex: '-1',
      }}>
        {sprinklesToRender}
      </div>
    );
  }
}
