import styled from  'styled-components'


export const Container = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   
`

export const Header = styled.header`
    height: 238px;
    background-color: #fff159;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);

    @media (max-width: 720px) {
     height: 56px;
               
    }

`
export const  HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding:  8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
` 

export const FormTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 24px;
    

`
export const Form = styled.form`
    max-width:424px;
    width: 100%;
    min-height: 500px;
    margin: 0 auto;
    padding:64px;
    background-color: white;
    border-radius: 4px;
    margin-top: -84px;
    @media (max-width: 720px) {
      padding: 24px;
      width: 100%;
        max-width: 100%;
       
        margin-top: 0;
        
    }
    
`
export const Footer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content:center ;
max-height: 88px;
height: 100vh;
margin-top: auto;
background-color: white;



  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  @media (max-width: 720px) {
      border-top: 1px solid #f5f5f5;
      height: 100%;
      max-height: 100%;

      span{
          font-size: 14px;
      }
     
               
    }

`

export const BigLogo = styled.img`
        max-width: 134px;
        height: 34px;
        margin-right: 16px;
        @media (max-width: 720px) {
        display: none; 
    }
    
    
    `

export const SmallLogo = styled.img`
        max-width: 134px;
        height: 34px;
        margin-right: 16px;
        display: none; 

        @media (max-width: 720px) {
        display: block;

               
        }


`

