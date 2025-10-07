# The problem
This hook solves the problem of prop drilling, which is the need to pass the prop from one parent component to the child and to the grandchildren and all the way back, in the case when you need a prop from the parent to be used only by the grandchildren.

To do this you would need to pass the prop also to the child eventhough the child does not need it. This makes the application slower because it needs to re-render everytime the prop change of value.

With useContext you don't need to pass the prop through all the lineage (parent, children, grandchildren). You can make it accessible to all.

# The solution
Use a hook called useEffect to make the prop available to all levels.

# Implementation
In the original code we use the useState hook to set up the prop and the function to manage this prop. But we will now use createContext hook:
1. Import createContext from react
2. Instantiate an object from class createContext. No argument is needed. We will call it ``GlobalStateContext``.
3. Create a component called ContextExample that will return two child components.
4. Within the return we call a method from our object ``GlobalStateContext.Provider``
5. We pass as value the states and functions we need to pass to all the other child components. Here is where we make the props available 'globally'.
6. In the child component definition: we define the state or the function needed and we pass them the ``useContext(GlobalStateContext)`` hook. This is enough to give all the children access to the global props we define in steps 5.
6. In the parent component, we call the child components without the props as we did with useState case.