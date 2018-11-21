import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RootPage from "./components/RootPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RootPage/>
      </BrowserRouter>
    );
  }
}

export default App;




// style url https://coolors.co/000000-0c1821-1b2a41-324a5f-e3e1eb
