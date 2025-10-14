import React from 'react';
import Button from "./Button.jsx";

function CounterUi({decrement, increment, count}) {
    return (
        <>
            <Button onclick={decrement} text={"-"}></Button>
            <div className={"count"}>{count}</div>
            <Button onclick={increment} text={"+"}></Button>
        </>
    );
}

export default CounterUi;