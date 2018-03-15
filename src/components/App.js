import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <Main/>
       {/* <footer className="App-footer">
        <p>UNHealty 2018</p>
       </footer> */}
      </div>
    );
  }
}

export default App;
