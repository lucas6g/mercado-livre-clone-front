import styled from  'styled-components'
import {darken} from 'polished'


export const  PurchaseItem = styled.div`
display: flex;
align-items: center;
justify-content:space-between;

@media (max-width: 720px) {
        
        flex-direction: column;
        margin-bottom: 24px;
    
    }

`

export const BuyAgainButton = styled.button`
    width: 100%;
    max-width:100%;
    background-color: #3483fa;
    padding:  24px;
    height: 48px;

    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
   
    font-size: 14px;
    font-weight: bold;
    color: white;
    transition: all 0.4s;
    



    &:hover{
        background-color: ${darken(0.2,'#3483fa')} ;
    }

    @media (min-width: 720px) {
        
        max-width: 160px;
        height: 32px;
        padding: 16px;
        font-size: 12px;
        
    }


`


export const  PurchaseItemInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 24px;


`
export const  PurchaseItemInfoColun = styled.div`
  

`


export const  PurchasesItemStatus = styled.span`

    color: #00a650;
    font-size:14px;
 

`

export const  PurchasesItemQuantity = styled.span`

    color: #999;
    font-size:12px;
 

`



export const  PurchaseItemImage = styled.img`

width: 64px;
height: 64px;
margin-right: 16px;

`
export const  OrderItemTitle = styled.h2`
font-size: 20px;



`
export const  PurchaseItemArriveDate = styled.span`
font-size: 16px;
margin-bottom: 16px;

`

