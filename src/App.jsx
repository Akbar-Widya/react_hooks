import { useState } from "react";
import Map from "./Map";

const App = () => {
   const [zoomLevel, setZoomLevel] = useState(0);
   return (
      <>
         <p>Zoom level: {zoomLevel}</p>
         <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
         <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
         <hr />
         <Map zoomLevel={zoomLevel} />
      </>
   );
};
export default App;
