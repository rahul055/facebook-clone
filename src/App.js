import React, { useEffect } from 'react';

import './App.css';
import { userRef } from './firebase/firebase'
import signUp from './api/signUp';

function App() {
  useEffect(() => {

    userRef.push({
      email: 'rj.test@gmail.com',
      password: '12345'
    })

  }, [])

  const OnsingUp = () => {
    const result = signUp('newone@gmail.com', 'password')
    console.log(result)
  }

  return (
    <div className="App">
      <button onClick={() => OnsingUp()}>SignUp</button>
    </div>
  );
}

export default App;
