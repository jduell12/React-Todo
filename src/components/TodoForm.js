import React from 'react';
import {StyledButton} from './StyledTodo'

class TodoForm extends React.Component{

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="...todo"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                    />
                    <StyledButton>Add Todo</StyledButton>
                </form>
                <StyledButton onClick={this.props.clearCompleted}>Clear Completed</StyledButton>
            </div>
        )
    }
}

export default TodoForm;