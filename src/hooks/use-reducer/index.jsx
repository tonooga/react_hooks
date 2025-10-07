import { useReducer, useState } from "react";

// BASE CASE:
export const ReducerExample00 = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
        <h1>Reducer Hook</h1>
        <h2>Base Case (using only useState)</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev)=> prev+1)}>+1</button>
        <button onClick={() => setCount((prev)=> prev-1)}>-1</button>
        <button onClick={() => setCount((prev)=> prev*2)}>x2</button>
    </div>
  );
};  


// USING REDUCER HOOK
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "double":
            return { count: state.count * 2 }
        default:
            console.log("No action type");
    }
};

export const ReducerExample01 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
        <h2>Reducer Case:</h2>
        <p>Count: { state.count }</p>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch({ type: "double" })}>x2</button>
    </div>
  );
};  