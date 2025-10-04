import { useReducer, useState } from "react";

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

export const ReducerExample = () => {
//   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
        {/* <p>Count: {count}</p> */}
        <p>Count: { state.count }</p>
        {/* <button onClick={() => setCount((prev)=> prev+1)}>+</button> */}
        <button onClick={() => dispatch({ type: "incrementbb" })}>+</button>
        {/* <button onClick={() => setCount((prev)=> prev-1)}>-</button> */}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "double" })}>*</button>
    </div>
  );
};  