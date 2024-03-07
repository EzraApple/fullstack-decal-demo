import React, {useState} from 'react';

function VoteButton({text}) {
    let [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>{setCount(count +1);}}>{text} {count}</button>
        </div>
    );
}

export default VoteButton;