import styled from  'styled-components'
import {darken} from 'polished'


export const Container = styled.button`
    width: 100%;
    max-width: 100%;
    background-color: #3483fa;
    padding:  24px;
    height: 48px;

    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    transition: all 0.4s;
    cursor: pointer;

    &:hover{
        background-color: ${darken(0.2,'#3483fa')} ;
    }

`
