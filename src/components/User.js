import { useState } from "react";

const User = (props) =>{

    const [count,setCount] = useState(0);

    return(
        <div className="user-card">
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount((c)=>c+1)
            }} >Increment</button>
            <h2>Name:{props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: @junaid@gmail.com</h4>
        </div>
    )
}

export default User;