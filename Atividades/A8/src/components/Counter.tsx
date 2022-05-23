import { useState } from "react"
import '../styles/counter.scss'

export function Counter() {

    //imutabilidade
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1) //criando nova varivável
    }

    return(
        <div className="counter">
            <h4>{counter}</h4>
            <div><button type="button" onClick={increment}>Somar</button></div>
        </div>
    )
}