import React, { Component } from 'react';
import './launch.css';
import {Header} from './header';
import Exchange from './exchange';
import Description from './description';
import General from './general';


export default class Launchpad extends Component{
  
  render(){
    console.log("launch pad called")
    return(
      <div className="pirate_launchpad">
        <Header></Header>
        <Exchange />
        <Description />
        <General />
      </div>
    )
  }
}