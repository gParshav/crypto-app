import React  from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Intro from './Intro';
import Navbar from './Navbar';
import Login from './Login'

function App() {

  
  return (
    <>
      <Navbar />
      <Route exact path='/'>
        <Intro  />
      </Route>
      <Route path='/home'>
        <Home  />
      </Route>
      <Route path='/login'>
        <Login  />
      </Route>
      
      
      
    </>
    

  )
}

export default App;
