import React from 'react'
import "../styles/Transfer.scss"
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { LuJapaneseYen } from "react-icons/lu";

function Transfer({setDollar, dollar,wallet,euro, makeTransfer, setEuro, yen, setYen}) {


  function toDollars(){
    let math=Math.floor(wallet/1635.95);
    setDollar(math);
  }
  function toJapan(){
    let math=Math.floor(wallet/11.3);
   setYen(math); 
  }
  function toEuro(){
    let math=Math.floor(wallet/1762.05);
   setEuro(math);  
  }


  return (
    <div className="transfer">
      <nav className="nav">
      <LuJapaneseYen className="icon"/>
      <RiMoneyEuroCircleFill className="icon"/>
      <HiCurrencyDollar className="icon"/>
      </nav>
      <h4>YOUR WALLET BALANCE</h4>
      <span>{wallet}Naira</span>
      <div className="exchange">
<ul>
  <li>
    <div className="left">
    <RiMoneyEuroCircleFill className="icon" />
    <p>To Euros</p>
    </div>
    <div className="center">
      <button onClick={toEuro}>Exchange</button>
    </div>
    <div className="right">
      <p>{euro}</p>
    </div>
  </li>
  <li>
    <div className="left">
    <HiCurrencyDollar className="icon"/>
    <p>To Dollars</p>
    </div>
    <div className="center">
      <button onClick={toDollars} >Exchange</button>
    </div>
    <div className="right">
      <p>{dollar}</p>
    </div>
  </li>
  <li>
    <div className="left">
    <LuJapaneseYen className="icon"/>
    <p>Japani</p>
    </div>
    <div className="center">
      <button onClick={toJapan}>Exchange</button>
    </div>
    <div className="right">
      <p>{yen}</p>
    </div>
  </li>

</ul>
  </div>
<button onClick={makeTransfer}>TRANSFER</button>
      <div className="space">
      </div>

    </div>
  )
}

export default Transfer;
