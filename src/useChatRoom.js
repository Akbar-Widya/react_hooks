import { useEffect } from "react";
import { createConnection } from "./chat";

export const useChatRoom = ({ serverUrl, roomId }) => {
   useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      console.log(`Connected to room: ${roomId} at ${serverUrl}`)
      return () => connection.disconnect();
   }, [serverUrl, roomId]);
}