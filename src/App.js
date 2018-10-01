// src/App.js
import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from "./Home.jsx";
import History from "./History.jsx";

class App extends Component {
  render() {
    return (
    
    <BrowserRouter>

        <div className="App">
            <nav>
                <NavLink exact to="/"> Accueil </NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
            </Switch>

        </div> 
        
    </BrowserRouter>

    );
  }
}

export default App;
