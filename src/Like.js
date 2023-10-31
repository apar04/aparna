import React,{useState} from "react";
function Like()
{
    const [counts1,setCounts1]=useState(0)
    function myfunc()
    {
        setCounts1(counts1+1)
    }
    function myfunc1(){
        setCounts1(counts1-1)
    }
    function myfunc2(){
        setCounts1(counts1+1)
    }
    return(
        <div>
            <button onClick={myfunc}>Increment</button>
            <span>{counts1}</span>
            <button onClick={myfunc1}>Decrement</button>
            <button onMouseOver={myfunc2}>{counts1}</button>
        </div>
    );
}
export default Like