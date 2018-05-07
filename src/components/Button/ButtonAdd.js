import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const ButtonAdd = (props) => (
    <FloatingActionButton secondary={true}
        onTouchTap={() => props.openModal()}
    >
        <ContentAdd />
    </FloatingActionButton>
);

export default ButtonAdd;