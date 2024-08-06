import React from 'react'
import "../styles/Openpage.scss"

function Openpage({setAuth}){

    function auth(){
        setAuth(true);
    }
  return (
    <div className="open">
      <h1>*737#</h1>
      <p>For every Nigerian</p>
      <button onClick={auth}>FREE AND OPEN SERVICE</button>
    </div>
  )
}

export default Openpage;
