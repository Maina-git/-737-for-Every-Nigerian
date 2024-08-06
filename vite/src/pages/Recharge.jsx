import React from 'react'
import "../styles/Recharge.scss"

function Recharge() {
  return (
    <div className="recharge">

<img src="/images/mobile-airtime.webp" alt="" />
<p>AIRTIME RECHARGE</p>

    <span><p>737 Airtime</p> <p>DIAL</p> </span>
      <div className="item">
        <h1>Airtime (self)</h1>
        <h1>*737* Amount#</h1>
      </div>
      <div className="item">
        <h1>Airtime (3rd Party)</h1>
        <h1>*737* AMOUNT*PHONE NO#</h1>
      </div>

      <span><p>737 Transfer</p> <p>DIAL</p></span>
      <div className="item">
        <h1>To a GTBank Acc</h1>
        <h1>*737*1*AMOUNT*NUNBAN ACC NO#</h1>
      </div>
      <div className="item">
        <h1>To Other Banks</h1>
        <h1>*737*2*AMOUNT*NUNBAN ACC NO#</h1>
      </div>
      <div className="item"></div>
    </div>
  )
}

export default Recharge
