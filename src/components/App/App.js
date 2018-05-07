import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {grey900, cyan600, red500} from 'material-ui/styles/colors';

import Header from '../Header/Header';
import ButtonAdd from '../Button/ButtonAdd';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';



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



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            deletedElement: null,
            itemsList: [
                {id: 0, selectValue: '1', inputNumber: '22'},
                {id: 1, selectValue: '2', inputNumber: '12'},
                {id: 2, selectValue: '3', inputNumber: '4'}
            ]
        }
    }

    handleChangeValue = (event, index, selectValue) => this.setState({ selectValue });
    handleChangeNumber = (event, index, inputNumber) => this.setState({ inputNumber });

    AddItem() {
        let obj = {
            id: this.state.itemsList.length,
            selectValue: this.state.selectValue,
            inputNumber: this.state.inputNumber
        };
        this.setState({
            selectValue: "",
            inputNumber: "",
            itemsList: [...this.state.itemsList, obj]
        });
    }

    DeleteItem(index) {
        this.state.itemsList.remove(index);
        this.setState({
            itemsList: this.state.itemsList
        });
    }



    render() {
        const ButtonCloseModal = (props) => (
            <HomeIcon
                style={stylebtnCloseModal}
                color={grey900}
                hoverColor={cyan600}
                onTouchTap={() => this.setState({isModalOpen: false})}
            />
        );
        return (
            <div className="App">
                <Header />
                <section>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 className="App-title">Welcome to React Modal popup window</h2>
                </section>
                <section>
                    <p>Please click on the button and create your own list!</p>
                    <ButtonAdd
                        openModal={() => this.setState({isModalOpen: true})}
                    />
                </section>
                <Dialog
                    modal={false}
                    open={this.state.isModalOpen}
                    onRequestClose={() => this.setState({isModalOpen: false})}
                >
                    <div className="ModalContainer">
                        <div className="ModalContainer-header">
                            <h3>Number structure</h3>
                            <ButtonCloseModal />
                        </div>
                        <div>
                            { this.state.itemsList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="CustomForm">
                                            <SelectField
                                                value={item.selectValue}
                                                style={stylesForm.customSelect}
                                                onChange={this.handleChangeValue}
                                            >
                                                <MenuItem value={1} primaryText="Twin" />
                                                <MenuItem value={2} primaryText="Tripple" />
                                                <MenuItem value={3} primaryText="Quadro" />
                                            </SelectField>
                                            <TextField
                                                type="number"
                                                defaultValue={item.inputNumber}
                                                style={stylesForm.customInput}
                                                onChange={this.handleChangeNumber}
                                            />
                                            <HomeIcon
                                                style={stylesForm.btnDeleteLine}
                                                color={red500}
                                                hoverColor={grey900}
                                                onTouchTap={this.DeleteItem.bind(this)}
                                            />
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                        <FlatButton
                            label="Add list"
                            primary={true}
                            style={stylebtnAddLine}
                            onTouchTap={this.AddItem.bind(this)}
                        />
                        <div className="ModalButtons">
                            <RaisedButton
                                label="Save"
                                primary={true}
                                style={styleModalBtn}
                                disabled={this.state.itemsList.length === 0}
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
    }
}


export default App;
