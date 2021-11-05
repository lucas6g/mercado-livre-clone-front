

import {
    Container,
    Title,
    ShoppinCartContainer,
    CartItemTotalContainer,
    CheckOutContainer,

 } from '../styles/pages/ShopingCartStyles'
import {Header} from '../components/Header/Header'
import { Button } from '../components/Button/Button'
import { requireSSRAuth } from '../utils/requireSSRAuth'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { CartItem } from '../components/CartItem/CartItem'
import { getStripeJs } from '../services/stripejs'
import { api } from '../services/api'


export default function ShopingCart() {

    const {shoppingCart:{total,cartItems}} = useContext(ShoppingCartContext)
    const [isLoading,setLoading] = useState(false)


   async function handleCheckoutSession(){
            
        try {

          if(cartItems.length > 0){

            setLoading(true)   
            const response = await api.post('/checkout')
      
            const {checkoutSessionId} = response.data
      
            const stripe = await getStripeJs()
            await stripe.redirectToCheckout({sessionId:checkoutSessionId})

            setLoading(false)
          }
        } catch (error) {
          alert(error.message)
        }
      
    }
    
    
  return (
    <Container>
      
        <Header />

        <ShoppinCartContainer>
            <Title>Carrinho de Compras ({cartItems.length}) </Title>

            {cartItems.map((cartItem)=>{
                return (
                    <CartItem 
                    key={cartItem.id}
                        id={cartItem.id}
                        product={cartItem.product}
                        quantity={cartItem.quantity}
                        formatedProductPrice={cartItem.formatedProductPrice}
                    />

                ) 
            })}
           
           
                <CartItemTotalContainer>
                    <strong>Total com frete {total}</strong>
                </CartItemTotalContainer>
                <CheckOutContainer>
                    <Button isLoading={isLoading} onClick={handleCheckoutSession} >Finalizar Compra</Button>
                </CheckOutContainer>


        </ShoppinCartContainer>


    </Container>
     
  )
}

export const getServerSideProps = requireSSRAuth(async (ctx) => {
  
  
    return {
      props: {}
    }
  })





