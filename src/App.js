import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './Credential/Login/Login';
// import Header from './Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
