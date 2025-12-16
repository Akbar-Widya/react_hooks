import { useState } from "react";

const App = () => {
   const [name, setName] = useState("Taylor");
   const [age, setAge] = useState(34);
   return (
      <>
         <input value={name} onChange={(e) => setName(e.target.value)} />
         <button onClick={() => setAge(age + 1)}>Increment age</button>
         <button onClick={() => setAge(age - 1)}>Decrement age</button>
         <p>
            Hello, {name}. You are {age}.
         </p>
      </>
   );
};
export default App;
