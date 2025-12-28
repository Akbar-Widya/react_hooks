import { useState } from 'react';

// ❌ NO MEMO: Component re-renders every time parent does
function TaskItem({ task, onDelete }) {
  console.log(`%c [Child] Rendered: ${task.text}`, "color: orange");
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
      {task.text} <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, text: 'Task A' }, { id: 2, text: 'Task B' }]);

  // ❌ NEW ID EVERY TIME: Function is recreated on every keystroke
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Type..." />
      {tasks.map(task => <TaskItem key={task.id} task={task} onDelete={handleDelete} />)}
    </div>
  );
}