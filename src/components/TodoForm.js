import React from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="...todo"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
                 <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;