import React, {useState} from "react";
import "./styles/Counter.css";
import Button from "./ui/Button.jsx";
import CounterUI from "./ui/CounterUI.jsx";

function Counter({count, min, max, step, setCount}) {
    const [localCount, setLocalCount] = useState(count);

    function incrementCount() {
        if (count !== max) {
            setCount(count + step);
        }
    }

    function decrementCount() {
        if (count !== min) {
            setCount(count - step);
        }
    }

    function incrementLocalCount() {
        if (localCount !== max) {
            setLocalCount(localCount + step);
        }
    }

    function decrementLocalCount() {
        if (localCount !== min) {
            setLocalCount(localCount - step);
        }
    }

    return (
        <div className={"counter"}>
            {setCount === undefined ? (
                <CounterUI count={localCount} decrement={decrementLocalCount} increment={incrementLocalCount}/>
            ) : (
                <CounterUI count={count} decrement={decrementCount} increment={incrementCount}/>
            )}
        </div>
    );
}

export default Counter;
