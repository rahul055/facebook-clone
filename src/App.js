import React, { useEffect } from 'react';

import './App.css';
import { userRef } from './firebase/firebase'

function App() {
  useEffect(() => {

    userRef.push({
      email: 'rj.test@gmail.com',
      password: '12345'
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
