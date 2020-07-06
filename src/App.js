import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const tasks = [
  {
    task: 'Watch videos',
    id: Date.now(),
    completed: false
  }, 
  {
    task: 'Do laundry',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      tasks: tasks
    }
  }

  addTask = taskName =>{
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [...tasks, newTask]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskList={this.state.tasks}/>
        <TodoForm onSubmit={this.addTask} addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
