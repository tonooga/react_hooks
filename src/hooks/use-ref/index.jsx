import { useEffect, useRef, useState } from "react";

// REF HOOK
export const RefExample01 = () => {
    const inputRef = useRef()
    const onClick = () => {
        console.log(inputRef.current.value)
    }

    return <>
        <h1>Ref Hook</h1>
        <h2>Example 1</h2>
        <input type="text" ref={ inputRef }></input>
        <button onClick = {onClick}> Console Log </button>
    </>
};

export const RefExample02 = () => {
    const [count, setCount] = useState(0)
    const previousCount = useRef(0)
    useEffect(()=> {
        previousCount.current = count
    }, [count])

    return <>
        <h2>Example 2</h2>
        <p>Count: { count }</p>
        <p>Previous Count: { previousCount.current }</p>
        <button onClick={()=> setCount((prev)=>prev+1)}>Increment</button>
    </>
};