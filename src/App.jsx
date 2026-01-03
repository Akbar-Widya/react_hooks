import { useState } from "react";
// Form Component
const App = () => {
   const firstNameProps = useFormInput('Mao')
   const lastNameProps = useFormInput('Ryoshu')
   return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
         <label>
            First name:
            <input {...firstNameProps} />
         </label>
         <label>
            Last name:
            <input {...lastNameProps} />
         </label>
      </div>
   );
};
export default App;

// Well, if you have many custom hooks, you do want to separate them into their own files.
const useFormInput = (initialValue) => {
   const [value, setValue] = useState(initialValue)
   const handleChange = (e) => {
      setValue(e.target.value);
   };
   const inputProps = {
      value: value,
      onChange: handleChange
   }
   return inputProps
}
