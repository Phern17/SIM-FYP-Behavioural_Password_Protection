import React from "react"

const LoginParticulars = (props) =>{
    return(
        <div>
            <h4>{props.name}</h4>
            <input type={props.type} />
        </div>
    )
}
export default LoginParticulars;