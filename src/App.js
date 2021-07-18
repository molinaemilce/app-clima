import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//Paginas
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/app-clima/" component={HomePage}/>
          <Route exact path="/" component={HomePage}/>
        </Switch>
    </Router>
  )
}

export default App;
