import React, { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const LOCAL_STORAGE_KEY = "react-todo-list-todos";
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function addItem(task) {
    task.id = todos.length;
    setTodos([task, ...todos]);
  }

  return (
    <div className="container">
      <AppHeader />
            <div className="main">
              <TodoItem addItem={addItem} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
              <TodoList setTodos={setTodos} todos={todos} />
            </div>
      <AppFooter />
    </div>
  );
}

export default App;
