import { useState } from "react"

function Home(){
    // let meroNumber = 0 ;
    
    // function increaseNumber(){
    //     meroNumber = increaseNumber + 1;
    //     console.log(meroNumber);
    // }
    // function decreaseNumber(){
    //     meroNumber = increaseNumber - 1;
    // }
    let [count, setCount] = useState(100) 
    
    
    return (
        <>
       <h1>Learning useState hook</h1>
        <h1>{count}</h1>
       <button onClick={()=> setCount(count + 1)}>+</button> 
       <button onClick={()=> setCount(count - 1)}>-</button> 
        
        </>
    )
}

export default Home