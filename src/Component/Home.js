import React from 'react';
import Header from './Header.js';
import Section from './Section.js';
import Services from './Service.js';
import Project from './Project.js';
import Team from './Team.js';
import Client from './Client.js';
import Footer from './Footer.js';

function Home() { 
 
  return (
    <div>
      <Header/>
      <Section/>
      <Services/>
      <Project/>
      <Team/>
      <Client/>
      <Footer/>

    </div>
      )
}

export default Home;