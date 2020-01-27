import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route exact path='/'>
      <Home/>
      </Route>

    <Route path='/About'>
      <About/>
      </Route>

    <Route path='/Contact'>
      <Contact/>
      </Route>
      
    <Navigation />
  </div>
);

export default App;
