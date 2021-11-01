import "./home.css";
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import WarningModal from './WarningModal';
import $ from 'jquery';

export default function Menu_tb() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = (value) => {
    setIsOpen(value);
  }
  const hide = () => {
    $(".menu_tb").css("display", "none");
    $(".show").css("display", "block");   
    $(".hide").css("display", "none");   
  }
  return (
    <div className="menu_tb">
      <div className="menu_sp_header">
        <Link to="/">
          <img src="assets/image/2.svg" />
        </Link>
      </div>
      <div>
        <img className="m_1" src="assets/image/m1.png" />
        <Link to="/" onClick={hide}>
          <img className="home_1" src="assets/image/logo-home.png" />
        </Link>
      </div>
      <div>
        <img className="m_2" src="assets/image/m2.png" />
        <Link to="" onClick={() => setIsOpen(true)}>
          <img className="home_2" src="assets/image/logo-marketplace.png" />
        </Link>
      </div>
      <div>
        <img className="m_3" src="assets/image/m3.png" />
        <Link to="/whitepaper" onClick={hide}>
          <img className="home_3" src="assets/image/logo-whitepaper.png" />
        </Link>
      </div>
      <div>
        <img className="m_4" src="assets/image/m4.png" />
        <Link to=""  onClick={() => setIsOpen(true)}>
          <img className="home_4" src="assets/image/logo-about.png" />
        </Link>
        <WarningModal isOpen={isOpen} onClose={onClose}></WarningModal>
      </div>
    </div>
  );
}
