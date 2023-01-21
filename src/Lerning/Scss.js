import React from 'react';
 import {Link } from 'react-router-dom' 


const Scss = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Form">Form</Link>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

export default Scss;