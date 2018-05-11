import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TextField from 'material-ui/TextField';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => input = node} type="number"/>
        <TextField
            type="number"
            defaultValue=''
            // style={stylesForm.customInput}
            // onChange={node => input = node}
            // onChange={(e, index, inputNumber) => this.setState({ inputNumber }}
            // ref={node => input = node}

        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};


export default connect()(AddTodo);
