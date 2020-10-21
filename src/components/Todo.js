import React from 'react';
import './Todo.css';
import {StyledDiv} from './StyledTodo'

const Todo = props => {
    return(
        <StyledDiv 
            onClick={() => {props.completeTask(props.task.id)}}
            className={`task${props.task.completed ? " completed" : ""}`}
        >
            <p>{props.task.task}</p>
        </StyledDiv>
    )
};

export default Todo;