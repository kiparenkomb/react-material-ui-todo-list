import React from 'react';
import logo from './logo.svg';
import ButtonAdd from './ButtonAdd';
import './App.css';


const TopSections = () => (
    <section>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Welcome to React Modal popup window</h2>
        <p>Please click on the button and create your own list!</p>
        <ButtonAdd
            openModal={() => this.setState({isModalOpen: true})}
        />
    </section>
);

export default TopSections;