import React from 'react';
import './App.css';
import Test from './Test';

const App = () => (
  <div className="App">
    <header className="App-header">
      s1
      <p>
        Edit
        <code>src/App.tsx</code>
        and save to reload.
      </p>
      <Test str="test" />
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

export default App;
