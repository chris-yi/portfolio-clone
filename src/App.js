import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="title">Start Bootstrap</div>
          <button className="menu-button">Menu <i class="fa fa-bars" aria-hidden="true"></i></button>
          <div className="links">
            <div>Services</div>
            <div>Portfolio</div>
            <div>About</div>
            <div>Team</div>
            <div>Contact</div>
          </div>
        </nav>
        <header className="landing">
          <div className="container">
            <div classname="hello-main">
              <h3 className="welcome">Welcome To Our Studio!</h3>
              <h1 className="nice-to-meet">It's nice to meet you</h1>
              <button className="tell-me-btn">Tell me more</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
