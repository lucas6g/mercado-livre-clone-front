
import styled from 'styled-components'


export const  Purchase = styled.div`
   
    border-bottom: 1px solid #f5f5f5;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    background-color: white;
     border-radius: 4px;
     margin-bottom: 16px;
  

    time{
        font-weight: bold;
    }

    
    @media (max-width: 720px) {
        align-items: flex-start;
        flex-direction: column;
    }


  

`

export const PurchaseHeader = styled.header`
    background-color: white;
    padding: 24px;
    margin-top: 16px;
    border-bottom: 1px solid #f5f5f5;
    border-top-right-radius: 4px;
    border-top-left-radius:4px ;
`


export const PurchaseContent = styled.div`
    padding: 24px;

`

export const  PurchaseTotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #f5f5f5 ;
    padding: 24px 24px;
    
    
    
    @media (max-width: 720px) {
        
        width: 100%;
        flex-direction: row;
     
    }

    
    `