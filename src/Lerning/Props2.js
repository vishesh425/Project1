import React from "react";
import { useState } from "react";
 import { Link } from 'react-router-dom' 


import Props1 from './Props1';

function Props2(){
  const [count, setCount] =useState(0);
  const [color, setColor] = useState(["a","b"]);
   const increment = () => {
    setCount((c)=>c + 1);
  };
  return(
  <div>
  <h1>Props2</h1>
    <hr/>
   <div> 
   <h2>Count</h2>
        Count: {count}
        <button onClick={increment}>+</button>

      </div>

    
 












 <br/><br/><br/>
     <br/><br/><br/>
     <br/><br/><br/>

  <Props1 brand="Ford" /> 
   <ul className="App-header">
                 <li>
                   <Link to="/">Home</Link>
                 </li> 
                 <li>
                   <Link to="/about">About Us</Link>
                 </li>
                 <li>
                   <Link to="/contact">Contact Us</Link>
                 </li>
                  <li>
                   <Link to="/Services">Form</Link>
                 </li>
                  <li>
                   <Link to="/Lifecycle">LIfeCycle</Link>
                 </li>
                  <li>
                   <Link to="/Props1">Props1</Link>
                 </li>
                  <li>
                   <Link to="/Props2">Propse2</Link>
                 </li>

               </ul>
  </div>
        )
}
export default Props2;