import React, { useEffect } from 'react';

import './App.css';
import signUp from './api/signUp';
import signIn from './api/signIn';

function App() {
  // useEffect(() => {

  //   userRef.push({
  //     email: 'rj.test@gmail.com',
  //     password: '12345'
  //   })

  // }, [])

  const OnsingUp = () => {
    const result = signIn('rjoshi055@gmail.com', 'password')
    console.log(result)
  }
  const Onsing = () => {
    const result = signUp('rjoshi055@gmail.com', 'password', 'rahul', 'jo')
    console.log(result)
  }

  return (
    <div className="App">
      <button onClick={() => OnsingUp()}>signin</button>
      <button onClick={() => Onsing()}>SignUp</button>
    </div>
  );
}

export default App;
