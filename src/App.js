import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Hello World from React!
          <br />
          This is pretty cool!
          <br />
          Git Hub is now connected!
          <br />
          Ci/Cd is working!
          <br />
          Authentication is now working!
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

