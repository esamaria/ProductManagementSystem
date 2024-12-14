import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div
        className="left"
        style={{ width: '600px', height: '10000px', background: '#B5BAD0' }}
      >
        <Navbar />
      </div>
      <div
        className="right"
        style={{ width: '2000px', height: '10000px', background: '#416788' }}
      >
        <Outlet /> 
      </div>
    </div>
  );
}

export default Home;
