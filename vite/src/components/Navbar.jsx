import React from 'react'
import "../styles/Navbar.scss"
import { Link } from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiNewbalance } from "react-icons/si";
import { RiFindReplaceFill } from "react-icons/ri";



function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> <ImHome/> </Link>
      <Link to="/r"> <RiFindReplaceFill/></Link>
      <Link to="/p"> <RiSecurePaymentFill/></Link>
      <Link to="/t"> <FaMoneyBillTransfer/> </Link>
      <Link to="/b"><SiNewbalance/></Link>
    </div>
  )
}

export default Navbar
