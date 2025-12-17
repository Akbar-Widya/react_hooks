import { useEffect, useState } from "react";
import { createConnection } from "./chat";

const ChatRoom = ({ roomId }) => {
   const [serverUrl, setServerUrl] = useState("http://localhost:3000");

   useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      console.log(`Connected to room: ${roomId} at ${serverUrl}`);
      // a cleanup function
      // one of its usage is to remove old dependencies, when the dependencies change
      return () => {
         connection.disconnect();
      };
   }, [serverUrl, roomId]);
   return (
      <>
         <label>
            Server URL:{' '}
            <input
               value={serverUrl}
               onChange={e => setServerUrl(e.target.value)}
            />
         </label>
         <h1>Welcome to the {roomId} room!</h1>
      </>
   );
};

const App = () => {
   const [roomId, setRoomId] = useState("general");
   const [show, setShow] = useState(false);
   return (
      <>
         <label>
            Choose the chat room:{' '}
            <select
               value={roomId}
               onChange={e => setRoomId(e.target.value)}
            >
               <option value="general">general</option>
               <option value="travel">travel</option>
               <option value="music">music</option>
            </select>
         </label>
         <button onClick={() => setShow(!show)}>
            {show ? 'Close chat' : 'Open chat'}
         </button>
         {show && <hr />}
         {show && <ChatRoom roomId={roomId} />}
      </>
   );
};
export default App;
