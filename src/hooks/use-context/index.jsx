import { createContext, useState, useContext } from "react";

// This code uses the traditional useState hook
export const ContextExample00 = () => {
    const [ isToggle, setIsToggle ] = useState(false);
    
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>(using useState hook)</h2>
            <ChildToggle00 setIsToggle={setIsToggle} />
            <ChildDisplay00 isToggle={isToggle}/>
        </div>
    );
};

const ChildToggle00 = ({setIsToggle}) => {
// This component is composed of a function that controls the state of Toggle through the click of a button
    return (
        // The function setIsToggle is define below as to change the previous value by its negative.
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    );
};

// Child Component to Display the State of Toggle 
const ChildDisplay00 = ({isToggle}) => {  
    return (
        <div>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
};

// ****** useContext HOOK
// Now we will use the useContext hook:
// Instantiate an object from class createContext. No argument is needed. We will call it GlobalStateContext.
export const GlobalStateContext = createContext(null)

export const ContextExample01 = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        // Everything you include in the provider will be accesible to the children components.
        // This is where you make the props available 'globally'
        <GlobalStateContext.Provider value={{isToggle, setIsToggle}}>
        
        <div>
            <h1>Parent Component</h1>
            <h2>(using useContext hook)</h2>
            <ChildToggle01 />
            <ChildDisplay01 />
        </div>
        </GlobalStateContext.Provider>
    );
};

const ChildToggle01 = () => {
    const { setIsToggle } = useContext(GlobalStateContext)
    return (
        <div>
        <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State 01</button>
        </div>
    );
};

// Child Component to Display State
const ChildDisplay01 = () => {
    const { isToggle } = useContext(GlobalStateContext)
    return (
        <div>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
};