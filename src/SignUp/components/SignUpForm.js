import React from "react"
import SignUpParticulars from "./SignUpParticulars"

const SignUpForm = props => {
    const SignUpHandler = () =>{
        console.log("submitted!")
    }

    const ITEMS = [
        {id: "sid1", name: "Email", type: "text" },
        {id: "sid2", name: "Username", type: "text" },
        {id: "sid3", name: "Password", type: "password"}
    ];
    return(
        <form onSubmit = {SignUpHandler}>
            <SignUpParticulars info={ITEMS}></SignUpParticulars>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpForm;