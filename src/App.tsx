import React, { useState } from 'react';

function App() {
    const [counter, setCounter] = useState<number>(0);
    return ( 
        <div className='counter'>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    );
}

export default App;