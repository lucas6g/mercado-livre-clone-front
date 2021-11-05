
import Router  from 'next/router'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { Button } from '../Button/Button'
import { 
    Container,
    ProductImageContainer
} from './ProductCardStyles'



interface ProductCardProps {
    id:string
    title:string
    price:string
    img_url:string
}

export function ProductCard({id,img_url,price,title}:ProductCardProps){

  const {addProductToCart} = useContext(ShoppingCartContext)
  const [isLoading,setLoading] = useState(false)
  const {user} = useContext(AuthContext)


  async function handleAddToCart(product_id:string){
      if(user){
       setLoading(true) 
       await addProductToCart(product_id)
       setLoading(false) 
       
      }else {
        
        Router.push('/signin')
      }
  }

  return (
    <Container>
        <ProductImageContainer>
            <img src={img_url} alt="Product" />
        </ProductImageContainer>

        <strong>{price}</strong>
        <p>{title}</p>
        <Button isLoading={isLoading} onClick={()=> handleAddToCart(id)} >
            Adicionar ao Carrinho
         </Button>
    </Container>
   
  )
}