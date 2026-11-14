import { useState, useRef } from "react";

function SmartInput() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);

    console.log("Component rendered");

    return (
        <div>
            <h1>useState vs useRef</h1>

            <h2>useState: {stateCount}</h2>
            <button onClick={() => setStateCount(stateCount +1)}>
                Increase State
            </button>

            <h2>useRef: {refCount.current}</h2>
            <button onClick={()=> {
                refCount.current++;
                console.log("Ref value:",refCount.current);

            }}>
                Increase Ref

            </button>

            <button onClick={() => setStateCount(stateCount + 1)}>
                Re-render using State
            </button>

        </div>
    );
}

export default SmartInput;