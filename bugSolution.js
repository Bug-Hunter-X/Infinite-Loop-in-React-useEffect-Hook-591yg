```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic. This will run only once on mount
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```