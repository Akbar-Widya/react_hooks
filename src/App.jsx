import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
   return (
      <TaskListApp />
   );
};
export default App;

// A memoized child component that only re-renders if its props change
const TaskItem = React.memo(({ task, onDelete }) => {
  console.log(`Rendering task: ${task.text}`);
  return (
    <li>
      {task.text} <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
});

function TaskListApp() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Master useCallback" },
    // Imagine 1,000 more tasks here...
  ]);

  // ✅ USE CASE: Wrap this in useCallback.
  // Because this is stable, typing in the search bar won't 
  // re-render the 1,000 TaskItems.
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  }, []); // [] means: create this function once and never again.

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
}


// GUI Output & Interaction
// Initial Render: You see a search bar and your list of tasks. The console logs "Rendering task..." for every item in your list.
// Type in Search Bar: As you type, the query state updates.
// With useCallback: The deleteTask function remains the exact same object in memory. Since the props for TaskItem haven't changed, the list does not re-render. The app stays fast.
// Without useCallback: React would create a brand-new deleteTask function for every keystroke. Even though the logic is the same, React sees a "new" function and re-renders all 1,000 items in the list, making the typing feel laggy.
// Why this is different from Solid/Vue
// React: Every keystroke re-runs the entire TaskListApp function, forcing you to use useCallback to "save" your functions.
// Solid/Vue: The setup code only runs once. Your deleteTask function is created once and stays in memory forever. You don't need a special hook because the framework doesn't try to recreate it.
// Key Rule for 2025: Only use useCallback when passing a function to a memoized child (using React.memo) or as a dependency in a useEffect.


// Q&A Section
// Q: good choice, let's dive one at a time. First I see that deleteTask() is called on taskItem and input search (is asssumed to render the searched item). So what's the deleteFUnction() has anything to do with the search action/process?
// A: Technically, they have nothing to do with each other.
// However, in React, state updates in a parent component force the entire parent function to re-run from top to bottom. This creates a "collateral damage" effect.
// The Problem: Collateral Re-renders
// The Trigger: You type in the search box. This updates the query state.
// The Parent Re-runs: Because state changed, React re-executes the entire TaskListApp() function to see what the new UI should look like.
// The Function is "New": Inside that re-run, the line const deleteTask = ... is hit again. To JavaScript, this creates a brand-new function object in memory with a new address.
// The Child "Panics": The TaskItem (your 1,000 list items) receives this "new" deleteTask function as a prop.
// Even though the logic of the function hasn't changed, the reference has.
// The child thinks: "My props changed (I got a new function!), so I must re-render myself". 
// Why this is a "React-only" problem
// In SolidJS or Vue, typing in a search bar does not re-run the entire component's setup logic. The deleteTask function is created once when the component is born and stays the same forever. Because the function never changes, the child components never feel the need to re-render.

// Q: ok so the setQuery triggers re-render including deleleTask(). Now why using useCallback is clear. But what is React.memo() doing then?
// A: Think of it like a "Security Check" at a gate:
// 1. If you use React.memo BUT NOT useCallback:
// You type in search.
// Parent re-runs and creates a brand new deleteTask function.
// Child (React.memo) checks its props: "Is old_deleteTask === new_deleteTask?"
// Because they are different objects in memory, it says "No, they are different!" and re-renders anyway.
// Result: Optimization failed.
// 2. If you use useCallback BUT NOT React.memo:
// You type in search.
// Parent re-runs, but useCallback gives back the exact same deleteTask function.
// Child receives the same function.
// HOWEVER, since the child isn't wrapped in memo, it doesn't even bother to check its props. It just re-renders because its parent told it to.
// Result: Optimization failed.

