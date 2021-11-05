import styled,{css} from  'styled-components'


interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
  }


  interface StyledInputProps {
    isErrored: boolean;
  }


export const Container = styled.div<StyledInputProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 36px;
    font-size: 14px;

    

    
    ${(props) =>
        props.isErrored   &&
        css`
          margin-bottom: 56px;
        
        `}

        label {
          ${(props) =>
        props.isErrored   &&
        css`
        color: red;
        
        `}
        }

        span {
          color: red;
        }
   

 `
export const StyledInput = styled.input<ContainerProps>`

        border:  1px solid  rgb(0 0 0 / 25%);
        width: 100%;
        height: 48px;
        border-radius: 4px;
        padding: 16px;
        margin-top: 8px;


        ${(props) =>
        props.isFocused   &&
        css`
        border-color: #3483fa;
        border-width: 2px;
        
        `}
        ${(props) =>
        props.isErrored   &&
        css`
        border-color: red;
        border-width: 1px;

        
        `}

 `
 