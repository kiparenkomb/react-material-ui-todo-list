import React, { Component } from 'react';
import Header from './Header';
import TopSections from './TopSections';
import Dialog from 'material-ui/Dialog';
// import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';


import {grey900, cyan600, red500, lightBlue300} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';


import load from '../utils/load';
// import Item from './Item';

// load('data.json')
//     .then(data => {
//         /* эта функция сработает для загруженных данных */
//     });

const stylebtnCloseModal = {
    padding: 10,
    cursor: 'pointer'
};
const stylebtnAddLine = {
    margin: '10px 0',
    cursor: 'pointer'
};
const styleModalBtn = {
    marginRight: 10,
};
const stylesForm = {
    customSelect: {
        width: 150,
        marginRight: 15,
        textAlign: 'left'
    },
    customInput: {
        width: 50,
        marginRight: 15,
        textAlign: 'left'
    },
    btnDeleteLine: {
        padding: 5,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        cursor: 'pointer'
    },
    btnSaveLines: {
        margin: '0 5px',
    }
};

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
);
const ButtonCloseModal = (props) => (
    <HomeIcon
        style={stylebtnCloseModal}
        color={grey900}
        hoverColor={cyan600}
        onTouchTap={() => this.setState({isModalOpen: false})}
    />
);




 const App = () => (
    <div className="App">
        <Header />
        <TopSections/>
        <Dialog
            // modal={false}
            // open={this.state.isModalOpen}
            open={true}
            // onRequestClose={() => this.setState({isModalOpen: false})}
        >
            <div className="ModalContainer">
                <div className="ModalContainer-header">
                    <h3>Number structure</h3>
                    <ButtonCloseModal />
                </div>
                <AddTodo />
                <VisibleTodoList />
                {/*<div>*/}
                    {/*{ this.state.itemsList.map((item, index) => {*/}
                        {/*return (*/}
                            {/*<div key={index}>*/}
                                {/*<div className="CustomForm">*/}
                                    {/*<SelectField*/}
                                        {/*value={item.selectValue}*/}
                                        {/*style={stylesForm.customSelect}*/}
                                        {/*onChange={this.handleChangeValue}*/}
                                    {/*>*/}
                                        {/*<MenuItem value={1} primaryText="Twin" />*/}
                                        {/*<MenuItem value={2} primaryText="Tripple" />*/}
                                        {/*<MenuItem value={3} primaryText="Quadro" />*/}
                                    {/*</SelectField>*/}
                                    {/*<TextField*/}
                                        {/*type="number"*/}
                                        {/*defaultValue={item.inputNumber}*/}
                                        {/*style={stylesForm.customInput}*/}
                                        {/*onChange={this.handleChangeNumber}*/}
                                    {/*/>*/}
                                    {/*<HomeIcon*/}
                                        {/*style={stylesForm.btnDeleteLine}*/}
                                        {/*color={red500}*/}
                                        {/*hoverColor={grey900}*/}
                                        {/*onTouchTap={this.DeleteItem.bind(this)}*/}
                                    {/*/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*}) }*/}
                {/*</div>*/}
                <FlatButton
                    label="Add list"
                    primary={true}
                    style={stylebtnAddLine}
                    // onTouchTap={this.AddItem.bind(this)}
                />
                <div className="ModalButtons">
                    <RaisedButton
                        label="Save"
                        primary={true}
                        style={styleModalBtn}
                        // disabled={this.state.itemsList.length === 0}
                        // onTouchTap={}
                    />
                    <FlatButton
                        label="Cancel"
                        style={styleModalBtn}
                        onTouchTap={() => this.setState({isModalOpen: false})}
                    />
                </div>
            </div>
        </Dialog>
    </div>
);


export default App;
