



import { useContext } from 'react';

import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { 
    CartItemContainer,
    CartItemInfo,
    CartItemImage,
    CartItemTitle,
    CartItemOptions,
    CartItemQuantitySpinner,
    CartItemPrice,
    CartIitemInfoRow,
    CartItemInfoColun,


 } from './CartItemStyles';

 

 type CartItemProps  = {
    id:string
    quantity:number
    product:{
        id:string
        title:string
        price:string
        img_url:string
      }
      formatedProductPrice?:string
 }


export function CartItem({id,product,quantity,formatedProductPrice}:CartItemProps){

    const {removeProductFromCart,increaseCartProductQuantity,decreaseCartProductQuantity} = useContext(ShoppingCartContext)


    async function handleRemoveProduct(product_id:string,cart_id:string){
        await removeProductFromCart(product_id,cart_id)
    }
    
    async function handleIncreaseProductQuantity(product_id:string){
        await increaseCartProductQuantity(product_id)
    }
    async function handleDecreaseProductQuantity(product_id:string){
        await decreaseCartProductQuantity(product_id)
    }


  return (
    <CartItemContainer  >
        <CartItemInfo>
            <CartIitemInfoRow>
                <CartItemImage src={product.img_url} />
                <CartItemInfoColun>
                    <CartItemTitle >{product.title} </CartItemTitle>
                    <span>Frete Gratis</span>
                    
                </CartItemInfoColun>

            </CartIitemInfoRow>
            <CartItemOptions >
                <button onClick={() => handleRemoveProduct(product.id,id)} type="button">Excluir</button>
            
            
            </CartItemOptions>
        </CartItemInfo>
        <CartItemQuantitySpinner>
            <button disabled={quantity === 1? true:false} onClick={() => handleDecreaseProductQuantity(product.id)}  type="button">-</button>
                        {quantity}
            <button onClick={() => handleIncreaseProductQuantity(product.id)} type="button">+</button>

        </CartItemQuantitySpinner>

        <CartItemPrice>
            {formatedProductPrice}
        </CartItemPrice>
  </CartItemContainer>
    
  );
}