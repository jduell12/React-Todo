import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBarContainer'
import './styles.css'

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
      tasks: tasks,
      searchInput: ''
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
      tasks: this.state.tasks.filter(task => {
        return task.completed !== true;
      })
    })
  }

  handleChange = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to Your Todo List App!</h2>
        <SearchBar handleChange={this.handleChange}/>
        <TodoList 
          taskList={
            this.state.tasks.filter(task => {
              if(!this.state.searchInput || task.task.includes(this.state.searchInput)){
                return task;
              }
              return false;
            })
          }
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
