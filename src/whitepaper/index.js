import React, { Component } from 'react';
import Header from './header';
import Text from './text';
import Menu_tb from '../home/Menu_tb';
import Favicon from 'react-favicon';
import './whitepaper.css';

export default class Whitepaper extends Component{
  render(){
    return(
      <div className="pirate_whitepaper">
        <Menu_tb />
        <Header />
        <Text />
      </div>
    )
  }
}
