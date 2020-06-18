import React from 'react';

export default function Counter(props) {
    return(
        <>
            <p>Current value of counter is: {props.counter}</p>
            <button className={props.theme} onClick={()=>props.setCounter(props.counter+1)}>Increment</button>
            <button className={props.theme} onClick={()=>props.setCounter(props.counter-1)}>Decrement</button>
        </>
    );
}