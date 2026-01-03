import { useState } from "react";
// Form Component
const App = () => {
   const [firstName, setFirstName] = useState("Priest");
   const [lastName, setLastName] = useState("Gregor");

   const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
   };
   const handleLastNameChange = (e) => {
      setLastName(e.target.value)
   }
   return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
         <label>
            First name:
            <input value={firstName} onChange={handleFirstNameChange} />
         </label>
         <label>
            Last name:
            <input value={lastName} onChange={handleLastNameChange} />
         </label>
      </div>
   );
};
export default App;
