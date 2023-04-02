import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculator from './Calculator';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Calculator />
        <h6>code-vine</h6>
      </div>
    );
  }
}

export default App;
