import styled from  'styled-components'
import {MdSearch,MdLocationOn,MdShoppingCart} from 'react-icons/md'


export const Container = styled.header`
    height: 100px;
    background-color: #fff159;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`


export const  HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding:  8px 16px;

` 
export const  HeaderFirtLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

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

export const DisneyPlus = styled.img`
        
    max-width: 340px;
    max-height: 39px;
   

    @media (max-width: 1200px) {
            display: none;
    }


`



export const  InputContainer = styled.div`
    display: flex;
    max-width: 600px;
    width: 100%;
    height: 39px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    
    input {
        width: 100%;
        background-color: white;
        padding: 7px 60px 9px 15px;
        color: #333;
        border: none;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        border-right: 1px solid #f5f5f5;
       
        
        
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        
        padding: 8px;
        color: #333;
        border: none;
        
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        
    }
    
    @media (max-width: 1200px) {
            max-width: 100%;
    }

    ` 
export const  SearchIcon = styled(MdSearch)`
    
    font-size: 24px;
    color: #333;

` 
export const  HeaderSecondLine = styled.div`
    display: flex;
    align-items: center;
` 
export const  CepBox = styled.div`


    display: flex;
    
    span {
        font-size: 14px;
        color: #00000080;
       
    }
    @media (max-width: 476px) {
        display: none;
               
    }

` 
export const  CepInfo = styled.div`

    display: flex;
    flex-direction: column;
    
    

` 


export const  LocationIcon = styled(MdLocationOn)`
    font-size: 24px;
    color: #333;
` 
export const  FirstNavMenu = styled.nav`
    margin-left: 72px;
    

    ul {
        display: flex;
        align-items: center;

        li{
            font-size: 14px;
            color: #00000080;
            margin-right: 16px;
        }
          
        @media (max-width: 1080px) {
                   display: none;
        }
    }
    @media (max-width: 720px) {
        margin-left: 0;
               
    }

` 
export const  SecundNavMenu = styled.nav`
    margin-left: auto;

    ul {
        display: flex;
        align-items: center;

        li{
            font-size: 14px;
            color: #00000080;
            margin-right: 16px;
            font-weight: bold;
            cursor: pointer;

            @media (max-width: 576px) {
         
                font-size: 12px;
                margin-right: 14px;
           
            }
        }

        
    }

` 
export const  LogOutButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    color: #00000080;
    margin-left: 8px;
    font-weight: bold;
  }


` 
export const  ShopingCartIcon = styled(MdShoppingCart)`
    font-size: 24px;
    color: #333;

`
export const  ShopingCartQuantity = styled.span`
    
    color: #333;
    

`




