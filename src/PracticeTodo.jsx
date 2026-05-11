import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import './App.css';

function PracticeTodo() {
  const [todos, setTodos] = useState([
    { id: 1, text: '멋사 과제하기', done: false, priority: 'HIGH' },
    { id: 2, text: '밥 먹기', done: true, priority: 'MEDIUM' },
    { id: 3, text: '올리브영 가기', done: false, priority: 'LOW' },
  ]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  const [filter, setFilter] = useState('전체');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        done: false,
        priority,
      },
    ]);
    setInput('');
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === '완료') return todo.done;
    if (filter === '미완료') return !todo.done;
    return true;
  });

  return (
    <div className="container">
      <h2>⭐ To Do List ⭐</h2>
      <TodoInput
        input={input}
        setInput={setInput}
        priority={priority}
        setPriority={setPriority}
        addTodo={addTodo}
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} />
        ))}
      </ul>
    </div>
  );
}

export default PracticeTodo;
