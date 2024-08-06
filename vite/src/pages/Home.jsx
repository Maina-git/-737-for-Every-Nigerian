import React, { useEffect, useState } from 'react'
import "../styles/Home.scss"
import { SERVICES } from '../737PRODUCTS';
import { HiDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Home() {
const [currentService, setCurrentService]=useState(0);
const [show, setShow]=useState();

function Show(){
    setShow(prev=>!prev);
}


useEffect(()=>{
const interval=setInterval(()=>{
    setCurrentService(prevIndex => (prevIndex + 1)%  SERVICES.length);
 }, 5000);
    return ()=>clearInterval(interval);
},[]);
const service= SERVICES[currentService];

return (
    <div className="home">

<span className="icon"><HiDotsVertical onClick={Show}/> </span>
<Link to="/s"><p className={`${show ? "signout" : "hide"}`}>Sign Out</p></Link>

<div className="reveal">
    <h1><b>GT</b>Bank</h1>
    <p>
        Open an account, transfer funds, pay bills, buy airtime or data 
        and access our in-branch services right from your mobile 
        phone.
    </p>
</div>
    {currentService ? (
    <div className="service" key={currentService.id}>
    <img src={service.img}  />
    <h1>{service.Name}</h1>
    </div>
    ):(
    <div className="service">
    <img src="/images/placeholder-icon-01.webp" alt="" />
    <h1>*737#</h1>
    </div>
     )
    }
    </div>
  )
}

export default Home;
