import React from "react";
import { Link } from 'react-router-dom' 
import Home from './Home.js'
import About from './About.js'


class Contact extends React.Component {    
    constructor(props){
        super(props); 
        this.state = {
            brand: "Ford",
            model: "Mustang",
            colored: "Yellow",
            year: 1964
          };
    }  
    render() {
        return (
            <div>
               <h1>Contact</h1>
               <h1>GeeksForGeeks</h1>
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
               </ul>
               {/* <h1>{this.state.color}</h1>
               <button type='button' onClick={this.changeColor } >button</button> */}
            </div>
        );  
    }
    }
    
    
export default Contact;