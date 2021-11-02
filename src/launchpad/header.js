import { Component, useState, useCallback } from "react";
import pirate_logo from "./assets/img/pirate_logo.png";
import connect_wallet_img from "./assets/img/connect_wallet.png";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Web3 from "web3";
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import "./launch.css";
import { ethers } from 'ethers';
import Fortmatic from 'fortmatic';
import Torus from '@toruslabs/torus-embed';
import Portis from '@portis/web3';
import Authereum from 'authereum';

import {Modal} from 'react-modal';

export const Header = () => {
  // const [accout, setAccount] = useState("")
  // const connectWallet = async () => {
  //   await window.ethereum.request({ method: "eth_requestAccounts" })
  //   let accounts = await window.ethereum.request({ method: 'eth_accounts' })
  //   if(accounts.length > 0)setAccount(accounts[0])
  // }
  const [web3State, setWeb3State] = useState({});
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(true);

  const setWeb3Provider = useCallback(async (prov, updateAccount = false) => {
    try {
      if (prov) {
        const web3Provider = new Web3(prov);
        const provider = new ethers.providers.Web3Provider(
          web3Provider.currentProvider,
        );

        const providerNetwork = await provider.getNetwork();
        setWeb3State({
          ethersProvider: provider,
          providerChainId: providerNetwork.chainId,
        });
        if (updateAccount) {
          const signer = provider.getSigner();
          const gotAccount = await signer.getAddress();
          setAccount(gotAccount);
        }
      }
    } catch (error) {
      console.log("error occurred : ", error)
    }
  }, []);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: 'ETH Mainnet',
          42: 'Kovan Testnet',
          77: 'Sokol Testnet',
          100: 'xDai Chain',
          56: 'Binance Mainnet',
          97: 'Binance Testnet',
          1000: 'Monsta Testnet',
          1001: 'Monsta Mainnet',
        },
      },
    },
    fortmatic : {
      package : Fortmatic,
      options : {
        key : ""
      }
    },
    torus : {
      package : Torus,
      options : {
        networkParams: {
          host: "https://localhost:8545", // optional
          chainId: 1337, // optional
          networkId: 1337 // optional
        },
        config: {
          buildEnv: "development" // optional
        }
      }
    },
    portis : {
      package : Portis,
      options : {
        id : ""
      }
    },
    authereum : {
      package : Authereum
    }

  };

  const web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
  });



  const connectWeb3 = useCallback(async () => {
    try {

      console.log("called : ")
      setLoading(true);
      const modalProvider = await web3Modal.connect();

      await setWeb3Provider(modalProvider, true);

      // Subscribe to accounts change
      modalProvider.on('accountsChanged', accounts => {
        setAccount(accounts[0]);
      });

      // Subscribe to chainId change
      modalProvider.on('chainChanged', _chainId => {
        setWeb3Provider(modalProvider);
      });
    } catch (error) {
      console.log("error occurred : ", error);
    }
    setLoading(false);
  }, [setWeb3Provider]);
  // const connectWallet = () => {
  //   const web3 = new Web3(Web3.givenProvider)
  //   web3.eth.getAccounts(console.log)
  // }
  return (
    <div>
      <Link to="/"><img className="pirate_headlogo" src={pirate_logo}></img></Link>
      <img className="wallet_logo" onClick={() => connectWeb3()} src={connect_wallet_img}></img>
    </div>
  )
}
