import React from 'react';


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

    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
