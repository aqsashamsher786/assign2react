import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Birthday} from './container/sectionTitle/event';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Birthday' component={Birthday} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
