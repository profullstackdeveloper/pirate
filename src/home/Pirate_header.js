import "./home.css";
import React, { Component, useState } from "react";
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import WarningModal from './WarningModal';


export default function Pirate_header () {

  const [isOpen, setIsOpen] = useState(false);
  const onClose = (value) => {
    setIsOpen(value);
  }

  const show = () => {
    $(".menu_tb").css("display", "block");
    $(".show").css("display", "none");   
    $(".hide").css("display", "block"); 
  }

  const hide = () => {
    $(".menu_tb").css("display", "none");
    $(".show").css("display", "block");   
    $(".hide").css("display", "none");   
  }


  
    return (
      <div className="pirate_header">
        <div className="d-flex">
          <div className="mr-auto">
          
            <Link to="/">
              <img src="assets/image/2.svg" />
            </Link>
          </div>
          <div className="top-menu">
            <Link className="dis_hidden" to="">
              <img className="logo_home_home" src="assets/image/logo-home.png"/>
            </Link>
            <Link className="dis_hidden logo_marketplace" to="" onClick={() => setIsOpen(true)}>
              <img
                className="logo_marketplace"
                src="assets/image/logo-marketplace.png"
              />
            </Link>
            <Link to="/whitepaper" className="dis_hidden" >
              <img
                className="logo_whitepaper"
                src="assets/image/logo-whitepaper.png"
              />
            </Link>
            <Link className="dis_hidden" to="" onClick={() => setIsOpen(true)} >
              <img className="logo_about" src="assets/image/logo-about.png" />
            </Link>
            <Link className="pir_starlight" to="">
              <img
                className="rotating start_pirate_btn"
                src="assets/image/but-play2.png"
              />
              <img className="play_honey" src="assets/image/play_honey.png" />
            </Link>
            <WarningModal isOpen={isOpen} onClose={onClose}></WarningModal>
          </div>
          <div className=""></div>
          <button className="show" onClick={show}>
            <img src="assets/image/show.png" />
          </button>
          <button className="hide" onClick={hide}>
            <img src="assets/image/hide.png" />
          </button>
        </div>
      </div>
    );
  }
