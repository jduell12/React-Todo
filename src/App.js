import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const tasks = [
  {
    task: 'Watch videos',
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
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  completedTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.completed !== true){
          return task;
        } else {
          return <span></span>
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          taskList={this.state.tasks}
          completeTask={this.completedTask}
        />
        <TodoForm 
          onSubmit={this.addTask} 
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
