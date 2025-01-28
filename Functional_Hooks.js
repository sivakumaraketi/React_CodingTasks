/* created by Siva Kumar Aketi on 28th January 2025
	1. Create a functional component that uses hooks for state management.*/

import react from 'React';



const Counter = () => {
    const [count, SetCount] = useState(0)

    const increment = () => useState(count++);
    const decrement = () => useState(count--);
return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
    </div>
)


}
export default Counter;