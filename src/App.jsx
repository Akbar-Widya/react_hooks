import { useState } from "react";

const App = () => {
   const [name, setName] = useState("Taylor");
   const [age, setAge] = useState(27);

   const handleClick = () => {
      setName("Vinettro");
      setAge(25);
   };
   return (
      <div>
         <p>
            My name is {name} and I am {age} years old.
         </p>
         <button onClick={handleClick}>Change</button>
      </div>
   );
};
export default App;
