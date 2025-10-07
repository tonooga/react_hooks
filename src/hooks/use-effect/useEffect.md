# useEffect
This hook is powerful when dealing with API fetch.

## The problem
In cases when you want to run code (e.g. a function) everytime a State changes of value.

## The solution
It allows you to run code after a component is rendered (under certain cases or conditions)

## A few concepts first
Dependency list: This type of hook has two elements: a callback function and a dependency array. This second element is used to tell react: "check first if something has changed whatever is inside this array. If there is a change, render, if not, then do not render". If we don't add this dependency array, the useEffect will be run everytime the whole component is rendered and we not always want that. 

## Implementation
We will use this useful repository with mock json data. https://jsonplaceholder.typicode.com/users

Let's suppose I want to run the hook useEffect everytime the component renders out.

We will use the concept we saw in the previous hook useState in which we define a State and a function that handles this State. We do this with ``const [data, setData] = useState([])``

1. Import the ``useEffect`` from react.
2. In the Part I we only test the useEffect hook by fetching from a json repository. Then we give json format to the response. Then we show it in console.
3. In the Part II we map the data retrieved by the useEffect hook, we format it to json, and then use the function ``setData`` to assign it to the state ``Data``
4. Then we need to map the fetched data. This means that we will:
    a. Take one item from the data, and will display a specific property of this item e.g. ``item.title`` or ``item.email`` and then we do the same for all the items.

## Advance use of useEffect
You can use this hook to subscribe and clean up from events.

[Home](/README.md)