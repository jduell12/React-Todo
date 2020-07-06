import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <form>
                <input 
                    type="text"
                    placeholder="...todo"
                />
                <button>Add Todo</button>
                 <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;