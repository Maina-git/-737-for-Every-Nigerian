import React from 'react'
import Openpage from './pages/Openpage';
import Landing from './pages/Landing';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recharge from './pages/Recharge';
import Payment from './pages/Payment';
import Transfer from './pages/Transfer';
import Balance from './pages/Balance';
import Signout from './pages/Signout';
import "./App.css"

function App() {
const [auth, setAuth]=useState(false);
const [main, setMain]=useState(false);
const [wallet, setWallet]=useState(0.00);
const [balance, setBlance]=useState(0.00);
const [dollar, setDollar]=useState(0.00);
const [euro, setEuro]=useState(0.00);
const [yen, setYen]=useState(0.00);
const [transfer, setTransfer]=useState("Transfer");

function addWallet(){
  const value=prompt("ADD 10,000-1000,000,000 NAIRA");
  setWallet(value);
}
const makeTransfer=()=>{
  const option=prompt("SELECT OPTION 1 FOR EURO, 2 FOR DOLLARS, 3 FOR JAPANI");
  alert("Check your wallet Transfer in Your Wallet Balance");
if(option==1){
  setBlance(euro);
  setTransfer("EURO");
}
if(option==2){
  setTransfer("DOLLARS");
  setBlance(dollar);
}
if(option==3){
  setTransfer("JAPANI YEN");
  setBlance(yen);
}
}

if(!auth){
return (
<div>
<Openpage setAuth={setAuth}/>
</div>
)
}
return(
<div>
{
!main ? (
<Landing wallet={wallet} setMain={setMain} addWallet={addWallet}/>
)
:(
<div className="app">
<Router>
  <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/r" element={<Recharge/>}/>
              <Route path="/p" element={<Payment setWallet={setWallet}  wallet={wallet} addWallet={addWallet}/>} />
              <Route path="/t" element={<Transfer
              setWallet={setWallet}
              makeTransfer={makeTransfer}
               setDollar={setDollar} 
               euro={euro}
               setEuro={setEuro}
               yen={yen}
               setYen={setYen}
               dollar={dollar} wallet={wallet} 
               balance={balance}/>} />
            <Route path="/b" element={<Balance wallet={wallet} addWallet={addWallet} transfer={transfer} balance={balance}/>}/>
            <Route path="/s" element={<Signout  setAuth={setAuth} />}/>
          </Routes>
        <Navbar/>
      </Router>
  </div>
)
}
</div>
)
}

export default App;
