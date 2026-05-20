function TodoInput({
  input,
  setInput,
  priority,
  setPriority,
  addTodo,
  inputRef,
}) {
  return (
    <div className="input-section">
      <input
        ref={inputRef} //{/* ref 연결 */}
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="할 일을 입력하세요"
      />
      <div className="priority-buttons">
        {['HIGH', 'MEDIUM', 'LOW'].map((p) => (
          <button
            key={p}
            className={`priority-btn ${priority === p ? 'active-' + p.toLowerCase() : ''}`}
            onClick={() => setPriority(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <button className="add-btn" onClick={addTodo}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
