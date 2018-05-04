import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';


const Button = ({ children, onClick }) => (
    <div>
        <RaisedButton
            label={children}
            onClick={ onClick }
        />
    </div>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


export default Button;