/* created by Siva Kumar Aketi on 28th January 2025
3. Build a function-based component with lifecycle methods. */

/*
Summary of Functional Component Lifecycle with Hooks:
componentDidMount: useEffect(() => {}, [])
componentDidUpdate: useEffect(() => {}, [dependencies])
componentWillUnmount: useEffect(() => { return () => {} }, [])
shouldComponentUpdate: React.memo
getDerivedStateFromProps: useMemo or useEffect
 */

import react, {useEffect, useMemo} from 'React';

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const derivedState = useMemo(()  => value *  2, [value]);

useEffect(() => {
    console.log('Component did mount');
}, []) // Empty dependency array, runs once when component mounts

useEffect(() => {
    console.log('Component did update');
}, [count])// Dependency array, runs when 'count' changes

useEffect(() => {
    return () => {
        console.log('component will unmount')
    }
},[]); // Empty dependency array, runs when component unmounts


}
export default MyComponent;

const MemoComponent = React.memo(({value}) => {
    console.log('Component rendered');
  return <div>{value}</div>;
});

