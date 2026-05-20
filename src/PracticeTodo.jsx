import { useState, useEffect, useRef } from 'react';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import './App.css';

function PracticeTodo() {
  // localStorage에 저장된 데이터가 있으면 불러와서 초기값으로 사용
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: '멋사 과제하기', done: false, priority: 'HIGH' },
          { id: 2, text: '밥 먹기', done: true, priority: 'MEDIUM' },
          { id: 3, text: '올리브영 가기', done: false, priority: 'LOW' },
        ];
  });
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  const [filter, setFilter] = useState('전체');

  const inputRef = useRef(null); // useRef로 input 참조

  // todos가 변경될 때만 localStorage에 저장
  useEffect(() => {
    console.log('localStorage 저장 실행됨:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // todos가 바뀔 때만 실행

  // 페이지 처음 열릴 때 input 자동 focus
  useEffect(() => {
    inputRef.current.focus();
  }, []); // 빈 배열 = 최초 1회만 실행

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
    inputRef.current.focus(); // 추가 후 다시 focus
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
        inputRef={inputRef} // {/* ref 전달 */}
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
