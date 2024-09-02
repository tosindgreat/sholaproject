import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import AuthForms from "./components/AuthForms";
import { cardData } from './data';
// import './index.css';  // Ensure your styles are applied

const App = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url('/images/backgroundimage.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          width: '100vw'
        }}
      >
        <AuthForms />
        <Header />
        <Navbar />
        <Hero />
        
        <div className="card-container">
          {cardData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <Footer />
        <Time />
      </div>
    </Router>
  );
};

function Time() {
    
  const [time, updateTime] = useState(new Date().toLocaleTimeString());
  const [num, updateNum] = useState(100);
  function plus1() {
      updateNum(num + 1);
  }

  function minus1() {
      updateNum(num - 1);
  }

  function refreshTime() {
      const currentTime = new Date().toLocaleTimeString();
      updateTime(currentTime);
  }

  
  setInterval(refreshTime, 1000);

  return (
      <div>
          <div>
              <h1>{num}</h1>
              <button onClick={plus1}>+</button>
              <button onClick={minus1}>-</button>
          </div>
          <p>{time}</p>
          <button onClick={refreshTime}>Check current time</button>
      </div>
  );
}

export default App;
