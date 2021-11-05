import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {  parseCookies } from 'nookies' 


import { api } from "../services/api";
import { AuthContext } from "./AuthContext";
import { priceFormater } from "../utils/priceFormater";


type CartItem = {
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
      
      
      type ShoppingCart = {
        
        total:string
        cartItems:CartItem[]
       
    
}


type ShoppingCartContextData = {
 
 shoppingCart:ShoppingCart
 addProductToCart:(product_id:string)=>Promise<void>
 removeProductFromCart:(product_id:string,cart_item_id:string)=>Promise<void>
 increaseCartProductQuantity:(product_id:string)=>Promise<void>
 decreaseCartProductQuantity:(product_id:string)=>Promise<void>



  
};

type ShoppingCartProviderProps = {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [shoppingCart,setShoppingCart] = useState<ShoppingCart>({total:priceFormater('0'),cartItems:[]})  

    const {user} = useContext(AuthContext)

    async function addProductToCart(product_id:string){
        const response = await api.put("/carts/add-product",{},{params:{product_id}})

        const {cart,id,quantity,product} = response.data

        const cartItemIndexInArray = shoppingCart.cartItems.findIndex(cartItem => {
          return cartItem.id === id;
        });
        

        //se o produto ja estiver no carrinho
        if(cartItemIndexInArray !== -1){
          
          
          shoppingCart.cartItems[cartItemIndexInArray] = {id,product,quantity,formatedProductPrice: priceFormater(product.price)}
          
          setShoppingCart({
            cartItems:[...shoppingCart.cartItems],
            total: priceFormater(cart.total)
          })
        }else{
          
          
          setShoppingCart({
              cartItems:[...shoppingCart.cartItems,{id,quantity,product,formatedProductPrice: priceFormater(product.price)}],
              total:priceFormater(cart.total),
              
          })
        }

    }
    async function removeProductFromCart(product_id:string,cart_item_id:string){
        const response = await api.delete("/carts/remove-product",{params:{
          product_id
        }})

        const {total} = response.data

        

      const updatedCartItems =  shoppingCart.cartItems.filter((cartItem)=>{
          return cartItem.id !== cart_item_id
        })

       
           setShoppingCart({
               cartItems:[...updatedCartItems],
               total:priceFormater(total)
           })
          
    }

    async function increaseCartProductQuantity(product_id:string){
      const response = await api.put("/carts/increase-product-quantity",{},{params:{product_id}})

      const {cart,id,quantity,product} = response.data
      
      const cartItemIndexInArray = shoppingCart.cartItems.findIndex(cartItem => {
        return cartItem.product.id === product_id ;
      });
      
      
      if(cartItemIndexInArray !== -1){
        
        
        shoppingCart.cartItems[cartItemIndexInArray] = {id,product,quantity,formatedProductPrice: priceFormater(product.price)}
        
        setShoppingCart({
          cartItems:[...shoppingCart.cartItems],
          total: priceFormater(cart.total)
        })
      }

  }

  async function decreaseCartProductQuantity(product_id:string){
    const response = await api.put("/carts/decrease-product-quantity",{},{params:{product_id}})

    const {cart,id,quantity,product} = response.data
  

    const cartItemIndexInArray = shoppingCart.cartItems.findIndex(cartItem => {
      return cartItem.product.id === product_id ;
    });
    
    
    if(cartItemIndexInArray !== -1){
      
      
      shoppingCart.cartItems[cartItemIndexInArray] = {id,product,quantity,formatedProductPrice: priceFormater(product.price)}
      
      setShoppingCart({
        cartItems:[...shoppingCart.cartItems],
        total: priceFormater(cart.total)
      })
    }

  }


  
  
  useEffect(() => {
    const { '@mercado-livre:token': token } = parseCookies()


    if (token) {

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
        api.get<ShoppingCart>("/carts/items")
        .then((response)=>{
            const {cartItems,total} = response.data

           const formatedCartItems = cartItems.map((cartItems)=>{
              return {
                ...cartItems,
                formatedProductPrice:priceFormater(cartItems.product.price),
                
              }

            })
            
            setShoppingCart({total:priceFormater(total),cartItems:formatedCartItems})
          })
        }
        
        setShoppingCart({total:priceFormater('0'),cartItems:[]})    

  }, [user])



  return (
    <ShoppingCartContext.Provider value={{  shoppingCart,addProductToCart,removeProductFromCart,increaseCartProductQuantity,decreaseCartProductQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}