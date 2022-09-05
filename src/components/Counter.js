import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const incrementAmount = 1;
    const decrementAmount = 1;

    const incrementCount = () => {
        setCount(count + incrementAmount);
    }

    const decrementCount = () => {
        setCount(count - decrementAmount);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={decrementCount}>-</button>
            <span>Count value: { count }</span>
            <button onClick={incrementCount}>+</button>
            <br />
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default Counter;