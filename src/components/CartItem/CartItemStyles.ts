import styled from  'styled-components'

export const  CartItemContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    border-bottom: 1px solid #f5f5f5 ;
    padding: 24px 0;

    @media (max-width: 1080px) {
        grid-template-columns:  1fr;
        padding: 8px;
    }
  

`
export const  CartItemInfo = styled.div`
display: flex;
flex-direction: column;

`
export const  CartIitemInfoRow = styled.div`
display: flex;
align-items: center;
margin-bottom: 24px;


`
export const  CartItemInfoColun = styled.div`
 span {
     color: #00a650;
    font-size:14px;
 }

`
export const  CartItemImage = styled.img`

width: 64px;
height: 64px;
margin-right: 16px;

`

export const  CartItemOptions = styled.div`
    display: flex;
   
    
    button{
        background: none;
        border: none;
        font-size: 14px;
        color: #3483fa;
        margin-right: 16px; 
    }
`
export const  CartItemTitle = styled.h2`
font-size: 20px;

`

export const  CartItemQuantitySpinner = styled.div`
          border: 1px solid #f5f5f5 ;
          padding: 16px;
          border-radius: 4px;
          max-width: 121px;
          height: 46px;
          display: flex;
          justify-content:space-between ;
          align-items: center;

          button {
              display: flex;
              padding: 4px;
              justify-content: center;
              align-items: center;
              background: none;
              border:none;
              font-size: 24px;
              color: #3483fa;
          }
          @media (max-width: 1080px) {
            
           
            margin-top: 16px;
        }
          
`
export const  CartItemPrice = styled.strong`
    font-size: 26px;
    text-align:end;
  
`