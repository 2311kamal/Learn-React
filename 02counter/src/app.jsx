import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  let [counter, setCouner] = useState(10);

  const addValue = () => {
    if (counter < 20) setCouner(counter + 1);
  };
  const dectCounter = () => {
    if (counter > 0) setCouner(counter - 1);
  };

  return (
    <>
      <h1>Kamal Garg</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={dectCounter}>Decr Value</button>
    </>
  );
}
