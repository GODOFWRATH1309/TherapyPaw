import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import LoginPage from './component/LoginPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dog from './component/Dog';
// import TherapyDog from './component/TherapyDog';
import About from './component/About';
import Doctor from './component/Doctor';
import TherapyPaw from './component/TherapyPaw';
import SignInPage from './component/SignInPage';
import Preview from './component/Preview';
import NoteState from './context/notes/NotesState';





export default class App extends Component {
  render() {
    return (
      <>
      <NoteState>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <TherapyPaw />
            </Route>
            <Route exact path="/Dog">
              <Dog />
            </Route>
            {/* <Route exact path="/TherapyDog">
              <TherapyDog /> 
             </Route> */}
            <Route exact path="/Doctor">
              <Doctor />
            </Route>
            <Route exact path="/SignInPage">
              <SignInPage />
            </Route>
            <Route exact path="/LoginPage">
              <LoginPage />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/preview">
              <Preview/>
            </Route>
          </Switch >
        </Router>
        </NoteState>
        

      </>
    )
  }
}

