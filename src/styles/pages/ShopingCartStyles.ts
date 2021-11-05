import styled from  'styled-components'


export const Container = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
  
   
`
export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #f5f5f5 ;
    padding-bottom: 24px;
    @media (max-width: 576px) {
    font-size: 14px;
                            
    }
`

export const  ShoppinCartContainer = styled.main`
    max-width: 1200px;
    width: 100%;
    padding: 32px;
    margin: 0 auto;
    height: auto;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    background-color: white;
    border-radius: 4px;
    margin-top: 32px;
    
    @media (max-width: 576px) {
      
        padding: 24px;
        margin-top: 0px;
     
         
     }


`
export const  CartItemTotalContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #f5f5f5 ;
    padding: 32px 0;
    justify-content: flex-end;

    
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





