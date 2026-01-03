import { useEffect, useEffectEvent } from "react";
import { createConnection } from "./chat";

export const useChatRoom = ({ serverUrl, roomId, onReceiveMessage }) => {
   const onMessage = useEffectEvent(onReceiveMessage)
   useEffect(() => {
      const options = {
         serverUrl,
         roomId,
      }
      const connection = createConnection(options);
      connection.connect();
      connection.on('message', (msg) => {
         onMessage(msg)
      })
      // console.log(`Connected to room: ${roomId} at ${serverUrl}`)
      return () => connection.disconnect();
   }, [serverUrl, roomId]);
}