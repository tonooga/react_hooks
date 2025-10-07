import { useEffect, useState } from 'react'

export const EffectExample00 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())
            .then((json)=> console.log(json));
    }, []);

    return (
        <div>
            <h1>Part I: useEffect</h1>
            <h2>(Check on console to see the json fetched by useEffect hook.)</h2>
            <ul>
                <li>...</li>
            </ul>
        </div>
    );
}

// Correct Use of useEffect hook:
export const EffectExample01 = () => {
    const [data, setData] = useState([]);
    const [showSomething, setShowSomething] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=> response.json())
            .then((json)=> setData(json));
    }, []);

    useEffect(()=> {
        console.log("Something");
    }, [showSomething]);

    return (
        <div>
            <h1>Part II: useEffect</h1>
            <ul>
                { data.map((item, index)=> (
                    <ol key={ index }>{ index+1 }: {item.name} | {item.email}
                    </ol>
                )) }
            </ul>
            <button onClick={()=> setShowSomething((prev)=> !prev)}> Toggle </button>
        </div>
    );
}
