import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu';
const appName = 'Code Challenge';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu appName={appName} />
        </header>
      </div>
    );
  }
}

export default App;
