import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/todoList";
import AddForm from "./components/addForm";

class App extends React.Component {
    state = {
      todoData: [
          {value: "Todo1", isImportant: true},
          {value: "Todo2", isImportant: false}
      ]
    };
    setImportant = (id) =>{
        const newData = [...this.state.todoData];
        newData[id].isImportant = !newData[id].isImportant;
        this.setState({todoData: newData});
    };
    deleteHandle = (id) =>{
        const newData = [
            ...this.state.todoData.slice(0, id),
            ...this.state.todoData.slice(id+1)
        ];
        this.setState({todoData: newData});
    };
    addContent = (content) =>{
        const newData = [...this.state.todoData, {value: content, isImportant: false}];
        this.setState({
            todoData: newData
        });
    };
    render() {
        return (
            <div className="App">
                <TodoList todoData={this.state.todoData} deleteHandle={this.deleteHandle} setImportant={this.setImportant}/>
                <AddForm addContent = {this.addContent}/>
            </div>
        );
    }
}

export default App;
