


import { 
   Purchase,
   PurchaseContent,
   PurchaseHeader,
   PurchaseTotalContainer
} from './OrderStyles'

import {OrderItem} from './OrderItem/OrderItem'


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
   
    
    }

interface OrderProps {
  
    status:string
    orderItems:OrderItem[]
    formatedOrderTotal:string
    formatedOrderDate:string
}

export function Order({formatedOrderDate,formatedOrderTotal,status,orderItems}:OrderProps){



  return (
    <Purchase>
        <PurchaseHeader>
            <time>{formatedOrderDate} </time> 
        </PurchaseHeader>
        <PurchaseContent>

            {orderItems.map((orderItem)=>{
                return (
                    <OrderItem
                       
                        formatedPurchaseItemArriveDate={orderItem.formatedPurchaseItemArriveDate}
                        product={orderItem.product}
                        quantity={orderItem.quantity}
                        key={orderItem.id}
                        status={status === 'order_delivered' ? 'Entregue' : 'A Caminho'  }


                    />
                )  
            })}
           

        </PurchaseContent>
        <PurchaseTotalContainer>
            <strong>Total:  {formatedOrderTotal}</strong>
        </PurchaseTotalContainer>
                    
  </Purchase>
   
  )
}