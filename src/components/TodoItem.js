import React from 'react';

const todoItem = ({ inputText, setInputText, todos, setTodos }) => {

const inputTextHandler = (e) => {
    setInputText(e.target.value);
};



const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, { text: inputText, id: Math.random() * 1000 }
    ]);
    setInputText("");
}


        return (
            <div className='todolist'>
            <h2>ToDo List</h2>
            <form>
                <div style={{margin: '12px 0'}}>
                <input type='text'
                value={inputText}
                        name='name'
                        placeholder="Enter task"
                        onChange={inputTextHandler}
                        required/>
                    &nbsp;&nbsp;
                <button type='submit' onClick={submitTodoHandler}>Add</button>
                </div>
            </form>
        </div>
        );
}

export default todoItem;