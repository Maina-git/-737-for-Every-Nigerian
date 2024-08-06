import React from 'react'
import "../styles/Signout.scss";

const Signout = ({setAuth}) => {

function signOut(){
    setAuth(false);
}

  return (
    <div className="Signout">
        <div className="bank">
            <div className="logo"></div>
            <h1>GTBank</h1>
        </div>
      
<p>Guarranty Trust Bank plc</p>
<button onClick={signOut}>SIGN OUT</button>

    </div>
  )
}

export default Signout;
