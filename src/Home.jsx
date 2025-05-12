import { useState } from "react"

function Home(){
    const [count, setCount] = useState(100);

    return (
        <div>
            <h1>this is a practice div</h1>
            <h1>you clicked {count} times</h1>
            <button onClick={()=> setCount(count + 2)}>Increment by 1</button>
            <button onClick={()=> setCount(count - 2)}>Decrement by 1</button>
        
        </div>
    )
}
export default Home