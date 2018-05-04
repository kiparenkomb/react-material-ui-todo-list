import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Modal popup window</h1>
                </header>
                <p className="App-intro">
                    Please click on the button and create your own list!
                </p>
                <RaisedButton label="Click me!" />
            </div>
        );
    }
}

export default App;
