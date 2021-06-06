import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],

        };

        this.addTasks = this.addTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    

    addTasks(e) {
        if (this._inputElement.value !== "") {
            const newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };
            
            this.setState((prevState) => {
                    return{
                        tasks: prevState.tasks.concat(newTask)
                    };
                }    
            );
        }

        this._inputElement.value = "";

        e.preventDefault();

    }
    

        deleteTask(key) {
            const filteredTasks = this.state.tasks.filter(function (task) {
            return (task.key !== key)
        });

        this.setState({
            tasks: filteredTasks
        });
    }

    render() {
        return (
        <div className='todolist'>
            <h2>ToDo List</h2>
            <form onSubmit={this.addTasks}>
                <div style={{margin: '12px 0'}}>
                <input type='text'
                        ref={(a) => this._inputElement = a} 
                        name='name'
                        placeholder="Enter task" 
                        required/>
                    &nbsp;&nbsp;
                <button type='submit'>Add</button>
                </div>
            </form>
            <TodoItem entries={this.state.tasks}
                        delete={this.deleteTask} />
        </div>
        );
    };
}

export default TodoList;