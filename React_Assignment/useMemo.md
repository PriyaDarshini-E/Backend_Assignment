## **Day 26 – useMemo Hooks (React)**

#### 1\. What is the purpose of useEffect in React?

useEffect is used to handle side effects in React functional components.

Side effects include API calls, data fetching, subscriptions, timers, and DOM updates.

It runs after the component renders and helps sync the component with external systems.

#### 2\. What problem does useMemo solve?

useMemo is used to optimize performance by memoizing expensive calculations.

It prevents unnecessary recalculations on every render by caching the computed value and recomputing it only when dependencies change.



#### 3\. Why do we use useCallback in React?



useCallback is used to memoize functions.

It prevents unnecessary re-creation of functions on every render, which helps avoid unnecessary child component re-renders when functions are passed as props.

#### 

#### 4\. Difference between useEffect and useMemo



useEffect is used to perform side effects such as API calls and subscriptions after rendering.

useMemo is used to memoize values during rendering to improve performance.

useEffect does not return a value, whereas useMemo returns a memoized value.



#### 5\. Difference between useMemo and useCallback



useMemo memoizes a computed value.

useCallback memoizes a function reference.

useMemo is used for expensive calculations, while useCallback is used to prevent unnecessary re-renders caused by changing function references.



#### 6\. What happens if you don’t provide a dependency array?



If no dependency array is provided to useEffect, it runs after every render.

If no dependency array is provided to useMemo or useCallback, they recompute on every render, making them ineffective.



#### 7\. When does useMemo recompute its value?



useMemo recomputes its value only when one or more values in its dependency array change.

If dependencies do not change, the cached value is reused.



#### 8\. How does useCallback prevent unnecessary child re-renders?



useCallback ensures the same function reference is passed to child components across renders.

This prevents child components from re-rendering unnecessarily when wrapped with React.memo.



#### 9\. Can we perform API calls inside useMemo or useCallback? Why?



No, API calls should not be performed inside useMemo or useCallback.

API calls are side effects and should be handled inside useEffect.

useMemo and useCallback must remain pure and should not cause external effects.



#### 10\. Real-time scenario where all three hooks are used together



In a product listing application:

useEffect is used to fetch products from an API.

useMemo is used to filter or search products efficiently.

useCallback is used to handle actions like adding products to the cart without causing unnecessary re-renders.





