import React, { useContext, useState } from "react";
import Input from "../../Shared/components/FormElements/Input";
import { useForm } from "../../Shared/hooks/formhook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../Shared/util/validators";
import { AuthContext } from "../../Shared/components/context/AuthContext";
//import ErrorModal from "../../Shared/components/UI-Element/ErrorModal"
import LoadingSpinner from "../../Shared/components/UI-Element/LoadingSpinner"

const Login = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler = async event => {
    event.preventDefault();

    setIsLoading(true);
    try {
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

      console.log(responseData);

      if(!response.ok)
      {
        throw new Error(responseData.message); 
      }

      setIsLoading(false);
      auth.login();

    } catch (err) {

      console.log(err);
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <form onSubmit={authSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
      {hasError && <p>Invalid email or password, please try again</p>}
      <Input
        element="input"
        id="email"
        type="email"
        label="Email"
        errorText="Wrong email format, please try again."
        validator={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        element="input"
        id="password"
        type="password"
        label="Password"
        errorText="Password cannot be shorter than 5 characters, please try again."
        validator={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <button type="Submit" disabled={!formState.isValid}>
        Login
      </button>
    </form>
  );
};

export default Login;
