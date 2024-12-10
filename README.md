# React Infinite Loop Bug

This repository demonstrates a common error in React applications involving infinite loops caused by improper use of the `useEffect` hook.

## The Bug
The `bug.js` file contains a React component that utilizes `useState` and `useEffect`. The useEffect hook incorrectly attempts to update the component's state (`count`) within its own execution, leading to an infinite loop. This is a classic example of how unexpected behavior arises from not understanding the timing and dependency array within `useEffect`.

## The Solution
The `bugSolution.js` demonstrates the corrected code. It addresses the root cause by updating the `useEffect` hook to only run once on mount, removing the infinite loop.