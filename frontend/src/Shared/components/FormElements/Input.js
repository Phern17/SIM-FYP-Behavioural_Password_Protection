import React, { useReducer, useEffect } from "react";
import {validate} from "../../util/validators";
import {Form} from "react-bootstrap";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    
    case "TOUCH":
      return{
        ...state,
        isTouched: true
      } 

    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initalValue || "",
    isTouched: false,
    isValid: props.intialValid || false
  });

  const {id, onInput} = props;
  const {value, isValid} = inputState;

  useEffect(() => {onInput(id, value, isValid)}, [id, value, isValid, onInput])

  //to validate the value user enter into the specific <input> and 
  //update the state of it
  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validator 
    })
  }

  //to check if that specific <input> is touched by user or not and
  //update the state of it
  const touchHandler = event => {
    dispatch({
      type: 'TOUCH'
    })
  }

  //to determine which type of input user would like by specifying 
  //props.element. Normal input if it's "input" otherwise "textarea"
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  //error text won't show up if inputState.isValid = true
  //and inputState.touchHandler = true;
  return (
    <div>
      <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
      {element}   
  {!inputState.isValid && inputState.touchHandler && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
