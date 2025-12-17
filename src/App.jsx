import { useEffect, useState } from "react";

const App = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMove = (e) => {
         setPosition({x: e.clientX, y: e.clientY})
      }
      // This window event seen by React as an external system
      window.addEventListener('pointermove', handleMove)
      return () => {
         window.removeEventListener('pointermove', handleMove)
      }
   }, [])
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }}
    />
  )
}
export default App
