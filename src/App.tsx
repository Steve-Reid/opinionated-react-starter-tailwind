import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Link to="/">
            <p className="text-green-500">Home</p>
          </Link>
          <Link to="about">
            <p className="text-purple-500">About</p>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
