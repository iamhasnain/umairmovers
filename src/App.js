import './App.css';
import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <nav>
        <div className="nav-content">
        <div className="website-name">
            Umair Movers
          </div>
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};




export default App;
