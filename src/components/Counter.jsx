import React, {useState} from 'react';
import "./styles/Counter.css"
import Button from "./ui/Button.jsx";

function Counter() {
    const [count, setCount] = useState(0)

    function incCount() {
        if (count != 5) {
            setCount((count) => count + 1)
        }
    }

    function decCount() {
        if (count != 0) {
            setCount(count => count - 1)
        }
    }

    return (

        <div className={"counter"}>
            <Button onClick={decCount} text={"-"}></Button>
            <div className={"count"}>{count}</div>
            <Button onClick={incCount} text={"+"}></Button>
        </div>

    );
}

export default Counter;