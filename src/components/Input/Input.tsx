
import { InputHTMLAttributes, useState } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import {MdWarning} from 'react-icons/md'

import { 
    Container,
    StyledInput

    
} from './InputStyles'


  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: FieldError;
    register:UseFormRegister<FieldValues>
}


export function Input ({
    name,
    label,
    error,
   register,
    ...rest
}:InputProps){
  
    const [isInputFocus, setIsInputFocus] = useState(false);
        
    const handleInputFocus = () => {
      
        setIsInputFocus(true);
    };
    
    const handleInputBlur = () => {

        setIsInputFocus(false);

     
      };
    return (
        <Container isErrored={!!error}>
            <MdWarning  color="#333" size={24} />

            {!!label && <label htmlFor={name}>{label}</label>}
            <StyledInput
                isFocused={isInputFocus}
                isErrored={!!error}
                id={name}
                name={name}
                onFocus={handleInputFocus}
                {...rest}   
                {...register(name)}
                onBlur={handleInputBlur}
            />
            {!!error &&  (<span>{error.message}</span>) }
        </Container>
    )
}

