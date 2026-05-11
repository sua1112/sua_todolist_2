function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      {['전체', '완료', '미완료'].map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? 'active-filter' : ''}`}
          onClick={() => setFilter(f)}
        >
          ≡ {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
