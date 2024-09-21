// App.js
import React, { useState } from 'react';
import Counter from './Counter';
import Display from './Display';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Counter App</h1>
            <Counter increment={increment} decrement={decrement} />
            <Display count={count} />
        </div>
    );
}

export default App;

