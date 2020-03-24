import React /*,{useContext}*/ from 'react';
import Input from '../../Shared/components/FormElements/Input'
import { useForm } from "../../Shared/hooks/formhook"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/util/validators';
//import { AuthContext } from '../../Shared/components/context/AuthContext';

const Login = () => {

  /* const auth = useContext(AuthContext) */

    const [formState, inputHandler] = useForm({
        email : {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }

    }, false); 

    const authSubmitHandler = async event => {
        event.preventDefault();
        
       /* try {
          const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              
              email: formState.inputs.email.value,
              password: formState.inputs.password.value
            })
          });
    
          const responseData = await response.json();
          auth.login();
          console.log(responseData);
        } catch (err) {
          console.log(err);
        } */
        console.log(formState)
      };
    
    return (
      <form onSubmit={authSubmitHandler}>
        <Input
          element = "input"
          id = "email"
          type = "email"
          label = "Email"
          errorText = "Wrong email, please try again."
          validator = {[VALIDATOR_REQUIRE()]}
          onInput = {inputHandler}
        />
        <Input
          element = "input"
          id = "password"
          type = "password"
          label = "Password"
          errorText = "Wrong password, please try again."
          validator = {[VALIDATOR_MINLENGTH(5)]}
          onInput = {inputHandler}
        />
        <button type="Submit" >Login</button>
      </form>
    );
}

export default Login;