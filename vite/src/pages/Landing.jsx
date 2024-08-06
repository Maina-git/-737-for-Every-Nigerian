import React, { useState } from 'react'
import "../styles/Landing.scss"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

function Landing({setMain, addWallet, wallet}) {
    const [showButton, setShowButton]=useState(false);


    function toMain(){
        if(wallet==""){
            alert("ADD TO YOUR WALLET");
        }
        else if(wallet<=10000){
            alert("Low Amount Try a Higher Amount")
        }
        else{
        setMain(true);
        }
    }

    useEffect(()=>{
        Aos.init({duration: 500});
    });

    useEffect(()=>{
        const timer=setTimeout(()=>{
    setShowButton(true);
        }, 10000);
        return ()=>clearTimeout(timer);
    },[]);

    if(!showButton){
    return (
        <div className="landing">
            <p>Simple Banking For Every Nigerian</p>
        <h2>Loading...</h2>
        </div>
    )
    }
  return (
<div className="landing">      
<div className="oval" data-aos="fade-right">
<h1>*737#</h1>
<p>Step into the future Today</p>
</div>
<button data-aos="fade-left" onClick={toMain}>REVIEW</button>
<button className="wallet" onClick={addWallet}>ADD TO YOUR WALLET</button>
    </div>
  )
}
export default Landing;
