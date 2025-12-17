import { useState } from "react";
import ModalDialog from "./ModalDialog";

const App = () => {
   const [show, setShow] = useState(false);
   return (
      <>
         <button onClick={() => setShow(true)}>Open dialog</button>
         <ModalDialog isOpen={show}>
            Hello there!
            <br />
            <button
               onClick={() => {
                  setShow(false);
               }}
            >
               Close
            </button>
         </ModalDialog>
      </>
   );
};
export default App;
