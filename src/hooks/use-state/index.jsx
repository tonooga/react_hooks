import { useState } from "react";

export const StateExample = () => {
    // We define a state called 'count' and a function 'setCount' that will control it.
    const [count, setCount] = useState(0);
    
    const increaseCount = () => {
        setCount((prevState)=> prevState + 1 )
        // console.log(count);
    }
    console.log("Console after the function: ", {count})

    return (
        <div>
            <button onClick={increaseCount}> Increase Counter </button>
            <p> Count: {count} </p>
        </div>
    )

}

