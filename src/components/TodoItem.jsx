function TodoItem({ todo, toggleDone }) {
  const priorityClass = {
    HIGH: 'priority-high',
    MEDIUM: 'priority-medium',
    LOW: 'priority-low',
  };

  return (
    <li
      className={`todo-item ${priorityClass[todo.priority]}`}
      onClick={() => toggleDone(todo.id)}
    >
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <span>{todo.done ? '🌟' : '📌'}</span>
    </li>
  );
}

export default TodoItem;
