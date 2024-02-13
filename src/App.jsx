import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const increaseValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick={decreaseValue}>Recrease Value</button>
    </>
  );
}

export default App;
