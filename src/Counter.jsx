import React, {useState} from 'react'
function Counter(){

    let [count,setCount] = useState(0)
    
    return(
        <div className='MainContainer'>
            
        <div className='Container'>
            <h1 className='CounterHeader'>Counter</h1>
            <div className='CounterContainer'>
            <p className='Counter'>{count}</p>
            </div>
            <div className='ButtonContainer'>
            <button className='Buttons' id='Inc' onClick={()=>{setCount(++count)}}>Increase</button>
            <button className='Buttons' id='Dec' onClick={()=>{setCount(--count)}}>Decrease</button>
            <button className='Buttons' id='Res' onClick={()=>{setCount(0)}}>Reset</button>
            </div>
            </div>
        </div>
    )


}
export default Counter