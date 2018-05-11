import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SvgIcon from 'material-ui/SvgIcon';


import {grey900, cyan600, red500} from 'material-ui/styles/colors';


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

const Item = ({ onChange, onClick, completed, text }) => (
    <React.Fragment>
        {text.map(item =>
            <div className="CustomForm" key={item.id}>
                <SelectField
                    value={item.selectValue}
                    style={stylesForm.customSelect}
                    // onChange={this.handleChangeValue}
                >
                    <MenuItem value={1} primaryText="Twin" />
                    <MenuItem value={2} primaryText="Tripple" />
                    <MenuItem value={3} primaryText="Quadro" />
                </SelectField>
                <TextField
                    type="number"
                    defaultValue={item.inputNumber}
                    style={stylesForm.customInput}
                    // onChange={this.handleChangeNumber}
                />
                <HomeIcon
                    style={stylesForm.btnDeleteLine}
                    color={red500}
                    hoverColor={grey900}
                    // onTouchTap={this.DeleteItem.bind(this)}
                />
            </div>
        )}
    </React.Fragment>
);

Item.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    text: state.ListInfo
});

export default connect(mapStateToProps)(Item);
