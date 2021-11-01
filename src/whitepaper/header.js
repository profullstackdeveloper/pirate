import { useState } from "react";
import pirate_logo from "./assets/img/logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from "react-router-dom";
import "./whitepaper.css";
import $ from "jquery";

import WarningModal from "../home/WarningModal";

function Header(props) {
  const show = () => {
    $(".menu_tb").css("display", "block");
    $(".show").css("display", "none");
    $(".hide").css("display", "block");
  };
  const hide = () => {
    $(".menu_tb").css("display", "none");
    $(".show").css("display", "block");
    $(".hide").css("display", "none");
  };
  const changeRoute = (route) => {
    props.history.push(route);
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClose = (value) => {
    setIsOpen(value);
  }
  return (
    <div className="white_header_links">
      <Link to="/">
        <img className="head_logo" src={pirate_logo} />
      </Link>
      <div className="nav_bar">
        {/* <Link to=""><p className="logo_home">HOME</p></Link>
          <Link to=""><p className="logo_mark">MARKETPLACE</p></Link>
          <Link to="/whitepaper"><p className="logo_white">WHITEPAPER</p></Link>
          <Link to="/launchpad"><p className="logo_launch">LAUNCHPAD</p></Link> */}
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "hand",
            display: "inline-block",
          }}
          onClick={() => changeRoute("/")}
        >
          <p className="logo_home">HOME</p>
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "hand",
            display: "inline-block",
          }}
          onClick={() => setIsOpen(true)}
        >
          <p className="logo_mark">MARKETPLACE</p>
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "hand",
            display: "inline-block",
          }}
          onClick={() => changeRoute("/whitepaper")}
        >
          <p className="logo_white">WHITEPAPER</p>
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "hand",
            display: "inline-block",
          }}
          onClick={() => setIsOpen(true)}
        >
          <p className="logo_launch">LAUNCHPAD</p>
        </button>
      </div>
      <div className="ic_nav_sh_hi">
        <button className="show" onClick={show}>
          <img src="assets/image/show.png" />
        </button>
        <button className="hide" onClick={hide}>
          <img src="assets/image/hide.png" />
        </button>
      </div>
      <WarningModal isOpen={isOpen} onClose={onClose}></WarningModal>
    </div>
  );
}

export default withRouter(Header);
