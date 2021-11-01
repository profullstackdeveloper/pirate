import { Component, useState } from "react";
import pirate_logo from "./assets/img/pirate_logo.png";
import connect_wallet_img from "./assets/img/connect_wallet.png";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import "./launch.css";

export const Header = () => {
  const [accout, setAccount] = useState("")
  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    let accounts = await window.ethereum.request({ method: 'eth_accounts' })
    if(accounts.length > 0)setAccount(accounts[0])
  }
  return (
    <div>
      <Link to="/"><img className="pirate_headlogo" src={pirate_logo}></img></Link>
      <img className="wallet_logo" onClick={() => connectWallet()} src={connect_wallet_img}></img>
    </div>
  )
}
