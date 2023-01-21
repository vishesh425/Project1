import { useState } from "react";
import React from 'react';
 import { Outlet,Link } from 'react-router-dom' 


function Form() {
  const [name, setName] = useState("");

   const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
     <h3>Form</h3>


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
                  <li>
                   <Link to="/Scss">Scss</Link>
                 </li>
               </ul>
                
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br/>
      <input type="submit"/>
      <p>This is your name {name}</p>
  
      </form>
  )
}

export default Form;