import React from "react"
import LoginParticulars from "./LoginParticulars"

const Login_Form = () =>{
    const ITEMS = [{name: 'Email', type: 'text'}, {name:'Password', type: 'Password'}]
    
    return(
        <div>
        <LoginParticulars name={ITEMS[0].name} type={ITEMS[0].type} />
        <LoginParticulars name={ITEMS[1].name} type={ITEMS[1].type} />
        </div>
    )
}

export default Login_Form;