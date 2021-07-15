import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Cases from './components/Pages/Cases';
import CasePage from './components/Pages/CasePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} /> {/* CHANGE THIS*/}
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cases" exact component={Cases} />
          <Route path="/cases/:case" exact component={CasePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
