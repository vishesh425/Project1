import logo from './logo.svg';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact';
  
//  **LEARNING
import Props2 from './Lerning/Props2';
import Props1 from './Lerning/Props1';
import Form from './Lerning/Form';
import LifeCycle from './Lerning/LifeCycle';
import Scss from './Lerning/Scss';

import  Header from './Component/Header';
import  Section from './Component/Section';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import './App.css';


function App() {
  return (
    <>
    <Router>
           <div className="Appp">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/Services' element={< Form />}></Route>
                 <Route exact path='/Form' element={< Form />}></Route>
                 <Route exact path='/Lifecycle' element={< LifeCycle />}></Route>
                 <Route exact path='/Props1' element={< Props1 />}></Route>
                 <Route exact path='/Props2' element={< Props2 />}></Route>
                 <Route exact path='/Scss' element={< Scss />}></Route>
          </Routes>
          </div>
       </Router>
       </>
  
  );
}

export default App;
