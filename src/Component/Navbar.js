 import React from "react";
 import { Link } from 'react-router-dom' 
 import '../css/navbar.css';
 import logo from '../images/logo.png'

class Navbar extends React.Component{
    render(){
        return(
             //navbar-expand-lg navbar-light bg-light Class Name 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
             <a href="index.html">
                <img src={logo} />
            </a>
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="/Team">Team</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}

export default Navbar;

 // class Navbar extends React.Component{
//     render(){
//         return(
//             <div>
//              <nav id="navbar">
//                 <div id="Logo">Logo</div>
//                 <div id="nav_link">
//                     <ul >
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">About</a></li>
//                         <li><a href="#">Services</a></li>
//                         <li><a href="#">Career</a></li>
//                     </ul>
//                 </div>
//              </nav>
//             </div>
//         )
//     }
// }

// export default Navbar;