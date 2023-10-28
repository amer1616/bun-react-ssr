import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button className="text-3xl" onClick={() => setCounter(counter + 1)}>
        +
      </button>

      <button className="text-3xl" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <h2>{counter}</h2>
    </div>
  );
};

export default Counter;
