import { useState } from "react";
import { useEffect } from "react";

// import Props from "./components/props";
function Counter() {
  const [count, setcount] = useState(0);
// useEffect(() => {
//   alert("Hey welcome to my page")
// }, []) 
// useEffect(() => {
//   console.log("Count is rendered")
// })
//   useEffect(() => {
  
// alert("Count is updated")
// }, [count])

  function increment() {
    setcount(count + 1);
  }
    return (
      <>
        <h1 className="text-center bg-blue-500 text-white px-4 py-2 font-bold hover:bg-blue-600 rounded">Count is {count}</h1>
        <button onClick={increment} className="text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" >
          Click me
        </button>
      </>
    );
  }

export default Counter;
//   function App() {
//   return (
//     <div>
//       <Props />
//     </div>
//   );
// }

