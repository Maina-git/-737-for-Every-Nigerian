import React from 'react'
import "../styles/Payment.scss"
import { useState } from 'react';

function Payment({wallet, setWallet}) {

const [billType, setBillType]=useState("");
const [amount, setAmount]=useState("");
const [bills, setBills]=useState([]);
const [totalAmount, setTotalAmount]=useState(0);


const handleAddBill=()=>{
    if(billType && amount){
        const newBill ={billType, amount:parseFloat(amount)};
        setBills([...bills, newBill]);
        setBillType("");
        setAmount("");
        setTotalAmount(totalAmount + newBill.amount);
    }
}

const handleDeleteBill = (index) => {
    const billToRemove = bills[index];
    setBills(bills.filter((_, i) => i !== index));
    setTotalAmount(totalAmount - billToRemove.amount);
};

function payment(){
    if(wallet<=totalAmount){
        alert("Insufficient Funds")
    }else{
        const total=wallet-totalAmount
        alert("Your New Balance is"+total);
        setWallet(Math.floor(total))}
}
  return (
<div className="payment">
<img src="/images/bill-payment.png"/>
<p>BILL PAYMENTS</p>
<div className="action">
<input type="text" placeholder='Enter Bill Name' value={billType} onChange={(e)=>setBillType(e.target.value)}/>
<input type="Number" placeholder='Enter Bill Amount in Dollars' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
<button onClick={handleAddBill} >ADD BILL</button>
</div>
<div className="billList">
<h1>MY BILLS</h1>
<ul>
{bills.map((bill, index)=>(
    <li key={index}>
        <h3>{bill.billType}: ${bill.amount.toFixed(2)}</h3>
    <button onClick={()=>handleDeleteBill(index)}>REMOVE BILL</button>
    </li>
))}
  </ul>
      </div>
      <span>Toatal Amount:${totalAmount.toFixed(2)}</span>
     <button className="pay" onClick={payment}>PAY FOR THE BILLS</button>
     <div className="space"></div>
    </div>
  )
}
export default Payment;
