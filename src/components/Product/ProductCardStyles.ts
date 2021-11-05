import styled from  'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width:100%;
    height: 400px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    background-color: white;
    padding: 16px;
    margin: 0 auto;
  
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    strong {
        font-size: 24px;
        color: #333;
    }
    
    p {
        margin-top: 4px;
        font-size: 14px;
        color: #666;
        
    }

`
export const ProductImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f5f5f5 ;
    padding-bottom: 8px;
    margin-bottom: 16px;
    img{
        width: 184px;
        height: 184px;

        
    }

    
    
`
