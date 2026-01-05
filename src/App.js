import React, { useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      {/* <h2>Count: {count}</h2> */}
      <Display count={count} name="Thanh Lam" increment={increment} />
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  );
};

export default App;
