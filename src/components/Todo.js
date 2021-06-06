import React from 'react';



const Todo = ({ text, todo, todos, setTodos }) => {

    const RemoveItem = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return (
        <div className="todo">
            <li onClick={RemoveItem} className="todo-item">{text}</li>
        </div>
    )
}

export default Todo;