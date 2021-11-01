import { Component, useEffect, useState } from "react";
import "./launch.css";
import Web3 from "web3";

import PresaleSwap from "../contract/Presale_Swap.json";

const Exchange = () => {
  const [sendBnbAmount, setSendBnbAmount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [bnbprice, setBnbPrice] = useState(0);
  const [arghValue, setArghValue] = useState(0);
  const [remainValue, setRemainValue] = useState(0);
  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    const PresaleSwapInstance = new web3.eth.Contract(
      PresaleSwap.abi,
      "0x4FcB7BB4E16Cc3EADceCE9D6946fE958F7c34c57"
    );
    PresaleSwapInstance.methods
    .getTokenAmount()
    .call()
    .then((res) => {
      setRemainValue(res);
    });
    PresaleSwapInstance.methods
      .getTokenPrice()
      .call()
      .then((res) => {
        setTokenPrice(res);
      }, []);

    PresaleSwapInstance.methods
      .getBNBPrice()
      .call()
      .then((res) => {
        setBnbPrice(res);
        console.log("price has been set : ", tokenPrice, bnbprice);
      });
  }, []);

  useEffect(() => {
    bnbprice != 0 && setArghValue(sendBnbAmount *(bnbprice/tokenPrice));
    const web3 = new Web3(window.ethereum);
    const PresaleSwapInstance = new web3.eth.Contract(
      PresaleSwap.abi,
      "0x4FcB7BB4E16Cc3EADceCE9D6946fE958F7c34c57"
    );


    PresaleSwapInstance.methods
      .getBNBPrice()
      .call()
      .then((res) => {
        setBnbPrice(res);
        console.log("price has been set : ", tokenPrice, bnbprice);
      });
  }, [sendBnbAmount]);

  const web3 = new Web3(window.ethereum);
  const PresaleSwapInstance = new web3.eth.Contract(
    PresaleSwap.abi,
    "0x4FcB7BB4E16Cc3EADceCE9D6946fE958F7c34c57"
  );

  const clickSwap = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      let accounts = await window.ethereum.request({ method: "eth_accounts" });
      const account = accounts[0];
      const web3 = new Web3(window.ethereum);
      const PresaleSwapInstance = new web3.eth.Contract(
        PresaleSwap.abi,
        "0x4FcB7BB4E16Cc3EADceCE9D6946fE958F7c34c57"
      );

      PresaleSwapInstance.methods
        .getTokenAmount()
        .call()
        .then((res) => {
          console.log("setRemainValue has been called : ", res)
          setRemainValue(res);
        });
      PresaleSwapInstance.methods
        .swap()
        .send({
          from: account,
          value: Number(sendBnbAmount) * 10 ** 18,
          gas: 100000,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  // swap contract: 0x2bF16b421172E3649ce6B5cAACb21D3231600f9d
  // token contract: 0x94b779Fc735203dBB1D300c89B3684E60b84Ad84

  //swap: 0x4FcB7BB4E16Cc3EADceCE9D6946fE958F7c34c57
  //token: 0x25d9762088b2676E84f75C87fb63501350B84d10

  return (
    <div className="token_exchange">
      <h3>PRESALE</h3>
      <div className="main_token_control">
        <div className="exchange_f_line">
          <div className="left_side bnb_input">
            BNB
            <input
              value={sendBnbAmount}
              onChange={(e) => setSendBnbAmount(e.target.value)}
            />
          </div>
          <div className="right_side round_input">
            ROUND
            <input disabled value={"1"}></input>
          </div>
        </div>
        <div className="exchange_s_line">
          <div className="left_side ARGH_input">
            ARGH
            <input disabled value={arghValue}></input>
          </div>
          <div className="right_side remain_input">
            REMAIN
            <input disabled value={remainValue / 10 ** 18}></input>
          </div>
        </div>
        <div className="exchange_t_line">
          <div className="left_side rate_inport">
            RATE
            <input disabled
              value={
                bnbprice != 0
                  ? (bnbprice/tokenPrice).toFixed(10)
                  : "calculating..."
              }
            ></input>
          </div>
          <div className="right_side swap_btn" onClick={() => clickSwap()}>
            <button>SWAP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
