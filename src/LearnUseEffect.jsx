import { useEffect, useState } from "react"

function  LearnUseEffect(){
    //type 1 of useEffect hook
    // useEffect(()=>{
    //     console.log("haha world");
    //     //code to fetch data from backend
    // }, [])

    //type 2 of useEffect hook
    
    const [number, setNumber] = useState(0);
    function increase(){
        setNumber(number+1)
    }

    useEffect(()=>{
        console.log("useEffect triggered");
    },[number]) //tyo dependeny array ma aru ni rakhna milyo, if trigger garaunu xa vaney, birsya vaye watch day19 around 48 min

//type 3 of useEffect 
useEffect(()=>{
    console.log("type 3 useEffect triggered");
})

    return (
        <div>
            <h1>this is a practice div</h1>
            <h1>you clicked {number} times</h1>
            <button onClick={increase}>+</button>
         
        
        </div>
    )
}
export default LearnUseEffect