import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_NODE_ENV);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit Terraform GitHub Actions CI/CD</p>
        <p>{process.env.REACT_APP_NODE_ENV}</p>
        {process.env.REACT_APP_NODE_ENV === 'development' ? (
          <p>localhost:3000</p>
        ) : (
          <p>web.ymnk.fun</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
