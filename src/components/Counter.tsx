import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else alert("Значение счетчика не может быть отрицательным!");
  }
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="btns__block">
        <button onClick={increment}>Увеличить</button>
        <button onClick={decrement}>Уменьшить</button>
      </div>
    </div>
  );
};

export default Counter;
