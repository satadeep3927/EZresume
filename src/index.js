import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import reportWebVitals from './reportWebVitals';
import Recover from './Recover';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from './Signup'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
        <App/>
        </Route>
        <Route exact path="/signin">
        <Login/>
        </Route>
        <Route exact path="/recover">
        <Recover/>
        </Route>
        <Route exact path="/signup">
        <Signup/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
