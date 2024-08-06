import React from 'react'
import "../styles/Balance.scss"
import { SiNewbalance } from "react-icons/si";


function Balance({wallet, balance, transfer}){

  function withDraw(){
    alert("Wait For a Confirmation Massage");
  }

  return (
    <div className="balance">
      <img src="/images/unnamed.jpg" alt="" />
    <p>Simple Bank For Every Nigerian</p>
    <h2>Initial Wallet Balance</h2>
    <span>{wallet}Naira</span>
    <h2>YOUR WALLET TRANSFER</h2>
    <p>{transfer}</p>
    <span>{balance}</span>
    <button onClick={withDraw}>WITHDARW</button>
    <SiNewbalance className="icon"/>
    <div className="space"></div>
    </div>
  )
}
export default Balance;


