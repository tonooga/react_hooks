import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
    const [count, setCount] = useState(0)
    // const onClick = () => {
    //     // console.log("Value")
    //     // console.log(inputRef.current.value)
    //     // console.log(inputRef.current.focus())
    //     inputRef.current.value = "Antonio"
    // }
    // const inputRef = useRef();

    // useEffect(()=> {
    //     console.log("Page rerendered")
    // })
    const previousCount = useRef(0)
    useEffect(()=> {
        previousCount.current = count
    }, [count])

    return <>
        {/* <input type="text" ref={ inputRef}/> */}
        <p>Count: { count }</p>
        {/* <button onClick={onClick}>Console Log</button> */}
        <p>Previous Count: { previousCount.current }</p>
        <button onClick={()=> setCount((prev)=>prev+1)}>Increment</button>
    </>
};
