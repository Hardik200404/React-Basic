// use of event listener and useState hook

import React, { useState } from 'react'

const Counter = () =>{
    const [count, setCount] = useState(0) // Initialize with 0

    const handleClick = () =>{
        setCount(count + 1) // Increament when clicked
    }

    return (
        <div>
            <p>Counter:</p>
            <p>{count}</p>
            <button onClick = { handleClick }>Increase Count</button>
        </div>
    )
}

export default Counter