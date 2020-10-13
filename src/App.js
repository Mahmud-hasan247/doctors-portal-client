import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/appointment">
            <AppointmentPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
