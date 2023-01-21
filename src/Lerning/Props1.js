import React from "react";
 import { Link } from 'react-router-dom' 

function Props1(props){

    return(
  <div>
      <h2>Props1</h2>
      <li>{props.Detail}</li>
      









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
export default Props1;