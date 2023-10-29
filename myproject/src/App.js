import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            文献搜索系统
          </p>
          <Link to="/search">Search</Link>
        </header>
      </div>
  );
}

export default App;
