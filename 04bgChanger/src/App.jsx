import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl">

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Lavender"}}  onClick={()=>setColor("Lavender")} >Lavender</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}  onClick={()=>setColor("grey")} >grey</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}  onClick={()=>setColor("black")} >black</button>
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}  onClick={()=>setColor("purple")} >purple</button>

        </div>
      </div>
    </>
  );
}

export default App;
