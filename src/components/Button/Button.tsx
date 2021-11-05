
import { ButtonHTMLAttributes,ReactNode } from 'react';
import { 
    Container,
    
} from './ButtonStyles'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    children:ReactNode;
    
   
  }
  
 export function Button({children,isLoading,...rest}:ButtonProps){
    return (
        <Container   {...rest} >
            {
                isLoading ?  <Loader type="ThreeDots" color="#ffffff" height={32} width={32} />   : children

            }
        </Container>     
    )
  }
  
  