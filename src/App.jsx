import { useState } from "react";

const App = () => {
   const [count, setCount] = useState(0);

   const handleClick = () => {
      setCount(count + 2.5)
   };
   return (
      <div>
         <p>
            Your wage is: {count} USD
         </p>
         <button onClick={handleClick}>Add wage</button>
      </div>
   );
};
export default App;
