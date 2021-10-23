// import './App.css';
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';
import { useState } from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <TodoCounter />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList >
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList >
      <CreateTodoButton />
    </>
  );
}

export default App;
