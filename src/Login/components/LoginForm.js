import React from "react";
import LoginParticulars from "./LoginParticulars";

const Login_Form = () => {
  const loginSubmitHandler = () =>{
    console.log("submitted!")
  }

  const ITEMS = [
    {id: "item1", name: "Email", type: "text" },
    {id: "item2", name: "Password", type: "Password"}
  ];

  return (
    <form onSubmit={loginSubmitHandler}> 
      <LoginParticulars info={ITEMS} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Login_Form;
