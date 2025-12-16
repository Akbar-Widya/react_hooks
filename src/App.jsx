import { useState } from "react";

const App = () => {
   const [text, setText] = useState('hello');

   const handleChange = (e) => {
      setText(e.target.value)
   };
   return (
      <div>
         <input value={text} onChange={handleChange} />
         <p>
            You typed: {text}
         </p>
         <button onClick={() => setText('hello')}>
            Reset
         </button>
      </div>
   );
};
export default App;
