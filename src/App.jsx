import { useState } from "react";

const App = () => {
   const [age, setAge] = useState(34);

   const handleClickOne = () => {
      setAge(age + 1);
      setAge(age + 1);
      setAge(age + 1);
   };

   const handleClickTwo = () => {
      setAge((a) => a + 1);
      setAge((a) => a + 1);
      setAge((a) => a + 1);
   };
   return (
      <>
         <p>Your age is: {age}</p>
         <button onClick={handleClickOne}>Add</button>
         <button onClick={handleClickTwo}>Add using updater fun</button>
      </>
   );
};
export default App;
