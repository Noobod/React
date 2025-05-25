import { useState, useEffect } from "react";

export default function Counter() {
    // let [count, setCount] = useState(0);
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    // let incCount = ()=> {
    //     setCount(currCount => currCount + 1);
    // }

    let incCountx = ()=> {
        setCountx(currCount => currCount + 1);
    }

    let incCounty = ()=> {
        setCounty(currCount => currCount + 1);
    }

    useEffect(function printSomething() {
        console.log("This is a side-effect");
    },
    [countx]
    );

    return (
        <div>
            {/* <h3>count = {count}</h3>
            <button onClick={incCount}>+1</button> */}
            <h3>count = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>count = {county}</h3>
            <button onClick={incCounty}>+1</button>

        </div>
    )
}