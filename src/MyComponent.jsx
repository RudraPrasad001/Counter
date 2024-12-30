import React,{useState} from "react"
function MyComponent(){
    const [name,setName]= useState("Ninj")
    const change = ()=>{
        setName("SpongeBob")
    }
    const changeJob = ()=>{
        setIsEmployed(!isEmployed)
    }
    const [isEmployed,setIsEmployed]=useState(false)

    return(
        <div>
            <p>Name: {name}</p>
            <p>Working: {isEmployed?"Yes":"No"}</p>
            <button onClick={change}>NameChanger</button>
            <button onClick={changeJob}>Toggle Status</button>
        </div>
    )
}
export default MyComponent