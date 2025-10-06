# The problem
Why not simply get DOM elements and add html elements?
You could do that but the app will not update or render anytime there is a change in a variable. States are used precisely to detect changes and re-render in your screen. States are indeed the building block of react applications.

# The solution
Use a hook that manages states on a react application. To best illustrate the application, we will build a counter app.

# Implementation
1. Import the ``useState`` from react.
2. We build a component that will display a counter and a button that add counts to the counter.
3. Inside the component, we define a state called ``count`` and a function ``setCount`` that will control it.
4. We define a function called 'increaseCount' which will run inside of it, the function ``setCount`` which can accept a callback function () => ()
5. The component will return a div containing: a button which will run the function we defined before on each click; and a counter which will increase by 1 each time the button is clicked.

[Home](/README.md)