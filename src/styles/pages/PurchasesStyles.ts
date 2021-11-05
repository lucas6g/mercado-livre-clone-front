import styled from  'styled-components'



export const Container = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
  
   
`
export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;

    @media (max-width: 576px) {
    font-size: 14px;
                            
    }
`

export const  PurchasesContainer = styled.main`
    max-width: 1200px;
    width: 100%;
    padding: 24px;
    margin: 0 auto;
    height: auto;
    margin-top: 32px;
    
    @media (max-width: 576px) {
      
        padding: 24px;
        margin-top: 0px;
     
         
     }


`


export const  PurchasesQuantity = styled.span`
    
    font-size: 14px;
    color: #999;
    padding-bottom:16px ;
    
    `

export const  CheckOutContainer = styled.div`
    display: flex;
  
    justify-content: flex-end;
    
    button{
        max-width: 216px;
        
        @media (max-width: 576px) {
            max-width: 100%;
            width: 100%;
           
         }
    }
    @media (max-width: 576px) {
       
        justify-content: center;
    
     }
    

`





