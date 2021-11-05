

import {
    Container,
    Title,
    PurchasesContainer,
    PurchasesQuantity,
   


 } from '../styles/pages/PurchasesStyles'
import {Header} from '../components/Header/Header'
import { requireSSRAuth } from '../utils/requireSSRAuth'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { priceFormater } from '../utils/priceFormater'
import {parseISO,format} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR';
import { Order } from '../components/Order/Order'
import { parseCookies } from 'nookies'


type OrderItem = {
    id:string
    quantity:number
    created_at:string
    product:{
        id:string
        title:string
        price:string
        img_url:string
      }
      formatedPurchaseItemArriveDate:string
     formatedProductPrice:string
    
    }
    
    
    type Order = {
      id:string
      total:string
      status:string
      orderItems:OrderItem[]
      created_at:string
      formatedOrderTotal:string
      formatedOrderDate:string

  
}



export default function Purchases() {


    const [orders,setOrders] = useState<Order[]>([])

    useEffect(()=>{
        //instancia do axios deixa de existir quando a pagina da reload
        const { '@mercado-livre:token': token } = parseCookies()

       api.defaults.headers['Authorization'] = `Bearer ${token}`

        api.get<Order[]>("/orders")
        .then((response)=>{
            const orders = response.data

            const formatedOrders = orders.map((order)=>{
                return {
                        ...order,
                        formatedOrderTotal:priceFormater(order.total),
                        formatedOrderDate:format(parseISO(order.created_at),"dd 'de' MMMM ",{
                            locale:ptBr
                        }),
                        orderItems:order.orderItems.map((orderItem)=>{
                            return {
                                ...orderItem,
                                formatedProductPrice:priceFormater(orderItem.product.price),
                                formatedPurchaseItemArriveDate:format(parseISO(orderItem.created_at),"'Chegou no dia' dd 'de' MMMM ",{
                                    locale:ptBr
                                })
                            }
                        })
                        
                }
            })

           

        
            setOrders(formatedOrders)
            
            
          })

    },[])



  return (
    <Container>
      
        <Header />

        <PurchasesContainer>
            <Title>Minhas Compras </Title>

            <PurchasesQuantity>{orders.length}</PurchasesQuantity>
          
            {orders.map((order)=>{
                return (
                    <Order
                        formatedOrderDate={order.formatedOrderDate}
                        orderItems={order.orderItems}
                        key={order.id}
                        formatedOrderTotal={order.formatedOrderTotal}
                        status={order.status}
                    
                    />
                )
            })}
            
           
           
        
        </PurchasesContainer>


    </Container>
     
  )
}
export const getServerSideProps = requireSSRAuth(async (ctx) => {
  
  
    return {
      props: {}
    }
  })

