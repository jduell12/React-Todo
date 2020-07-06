import React from 'react';
import {StyledButton} from './StyledTodo'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="...todo"
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <StyledButton>Add Todo</StyledButton>
                </form>
                <StyledButton onClick={this.props.clearCompleted}>Clear Completed</StyledButton>
            </div>
        )
    }
}

export default TodoForm;