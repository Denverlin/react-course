import React, {useState} from 'react';
import "./styles/Counter.css"
import Button from "./ui/Button.jsx";

function Counter() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        if (count !== 5) {
            setCount(count => count + 1)
        }
    }

    function decrementCount() {
        if (count !== 0) {
            setCount(count => count - 1)
        }
    }

    return (

        <div className={"counter"}>
            <Button onclick={decrementCount} text={"-"}></Button>
            <div className={"count"}>{count}</div>
            <Button onclick={incrementCount} text={"+"}></Button>
        </div>

    );
}

export default Counter;