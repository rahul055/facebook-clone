import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import signUp from './api/signUp';
import signIn from './api/signIn';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import Feed from './components/Feed';
import Navbar from './components/Reusable/Navbar'
import { firebaseApp } from './firebase/firebase';
function App() {
  // useEffect(() => {

  //   userRef.push({
  //     email: 'rj.test@gmail.com',
  //     password: '12345'
  //   })

  // }, [])

  const [stage, setStage] = useState('')

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      setStage('loggedIn')
    } else {
      // No user is signed in.
      console.log('user is not logged in');
      setStage('NotloggedIn')
    }
  });

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
      <Navbar stage={stage} />
      {stage === 'loggedIn' && <Feed />}
      {stage === 'NotloggedIn' && <SignUp />}


      <button onClick={() => Onsing()}>SignUp</button>

      <button onClick={() => OnsingUp()}>signin</button>
    </div>
  );
}

export default App;
