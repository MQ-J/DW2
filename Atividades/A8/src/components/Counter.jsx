import { useState } from "react"

export function Counter() {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    return(
        <div className="counter">
            <h4>{counter}</h4>
            <div><button type="button" onClick={increment}>Incrementar</button></div>
        </div>
    )
}