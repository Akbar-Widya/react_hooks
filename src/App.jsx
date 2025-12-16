import { useState } from "react";

const App = () => {
   const [age, setAge] = useState(34);

   const increment = () => {
      setAge(a + 1)
   }
   return (
      <>
         <h1>Your age : {age}</h1>
         <button
            onClick={() => {
               increment()
               increment()
               increment()
            }}
         >+3</button>
         <button
            onClick={() => {
               increment()
            }}
         >+1</button>
         <p>this can't work because does not use updater function</p>
      </>
   );
};
export default App;
