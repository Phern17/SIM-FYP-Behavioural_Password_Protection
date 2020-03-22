import {useCallback, useReducer} from 'react'

//'Input_Change' case:
//iterate through the available initial states there are being passed
//in, formIsValid = true if formIsValid && <input> is valid. 
//if it's not the one <input> we are looking for, copy the current state 
//Return the updated value and isValid that are dynamically set

const formReducer = (state, action) => {
    switch(action.type){
        case 'Input_Change':
            let formIsValid = true;
            for(const inputId in state.inputs) {
                if(!state.inputs[inputId]){
                    continue;
                }
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId] : {
                        value: action.value, isValid: action.isValid
                    }
                },
                isValid: formIsValid
            }
            
        default: 
            return state;    
    }
}

//to initiate the states of a form 
//inputHandler : useCallback function is used to prevent inifinite loop
export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'Input_Change',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

    return [formState, inputHandler];
}