import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { addToken } from './actions/addToken';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addToken: (token) => dispatch(addToken(token))
})

function App(props) {
  let Login = (event) => {
    // DO login
    // after loggin in, set the token in store.
    props.addToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{width: "100%", wordWrap: "break-word"}}>
          {
            JSON.stringify(props)
          }
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={Login}>Test redux action</button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
