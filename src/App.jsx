import { useState } from "react";

const App = () => {
   const [form, setForm] = useState({
      firstName: "Barbara",
      lastName: "Hepworth",
      email: "bhepworth@sculpture.com",
   });
   return (
      <>
         <label>
            First name:
            <input
               value={form.firstName}
               onChange={(e) => {
                  setForm({
                     ...form,
                     firstName: e.target.value,
                  });
                  // dont update object or array directly
                  // {setForm(form.firstName = e.target.value)}
               }}
            />
         </label>
         <label>
            Last name:
            <input
               value={form.lastName}
               onChange={(e) => {
                  setForm({
                     ...form,
                     lastName: e.target.value,
                  });
               }}
            />
         </label>
         <label>
            First name:
            <input
               value={form.email}
               onChange={(e) => {
                  setForm({
                     ...form,
                     email: e.target.value,
                  });
               }}
            />
         </label>
         <p>
            {form.firstName}{' '}
            {form.lastName}{' '}
            {form.email}
         </p>
      </>
   );
};
export default App;
