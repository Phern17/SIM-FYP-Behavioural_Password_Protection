import React from 'react';
import Input from '../../Shared/components/FormElements/Input'
import { useForm } from "../../Shared/hooks/formhook"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/util/validators';


const Login = () => {
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

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
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