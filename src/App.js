import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Flights from './components/Flights';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route  path="/" component={Header} />
          <Route exact path="/" component={Form} />
          <Route exact path="/flights" component={Flights} />
          <Route  path="/" component={Footer} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
