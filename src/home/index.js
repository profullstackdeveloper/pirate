import './home.css';
import Menu_tb from './Menu_tb';
import React from 'react';
import Pirate_header from './Pirate_header';
import Main from './Main';
import Pirate_footer from './Pirate_footer';

export default class Home extends React.Component{
    render(){
        return(
            <div className="pirate_front_body" style={{position:"absolute", width : "100%"}}>
                <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                </div>
                <Menu_tb />
                <Pirate_header />
                <Main />
                <Pirate_footer />
            </div>
        )
    }
}