import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

	inputChanged = (event) => {
this.setState({[event.target.name]: event.target.value});

}
	
  addTodo = (event) => {
    event.preventDefault(); 
  
    const newTodo = {date: this.state.date, description: this.state.description}
	  this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  delete = (event) =>
    {
        // parse id of button into integer, filter out table row based on id
        const index = parseInt(event.target.id);
        this.setState({
        todos: this.state.todos.filter((todo, i) => i !== index)
        });
}
  
  render() {
	   
	
    return (
	
    <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
         <form onSubmit={this.addTodo}>
            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date}/>
			<input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            <input type="submit" value="Add"/>
          </form>		
		</div>
	
		<TodoTable todos={this.state.todos} delete={this.delete} />
</div>
    );
  }
}

export default App;