


import { 
    BuyAgainButton,
    OrderItemTitle,
    PurchaseItem,
    PurchaseItemArriveDate,
    PurchaseItemImage,
    PurchaseItemInfo,
    PurchaseItemInfoColun,
    PurchasesItemQuantity,
    PurchasesItemStatus
   
 } from './OrderItemStyles'
 
 
 interface OrderItemsProps  {
   
    status:string
    quantity:number
    product:{
        id:string
        title:string
        price:string
        img_url:string
      }
      formatedPurchaseItemArriveDate:string
     
    
    }

 
    
 
 export function OrderItem({formatedPurchaseItemArriveDate,product,quantity,status}:OrderItemsProps){
 
 
 
   return (
     
         <PurchaseItem>
             <PurchaseItemInfo>
                 <PurchaseItemImage src={product.img_url} alt={product.title} />
                 <PurchaseItemInfoColun>
                     <PurchasesItemStatus>{status}</PurchasesItemStatus>
                     <OrderItemTitle > {product.title}</OrderItemTitle>
                     <PurchasesItemQuantity>{quantity} unidade</PurchasesItemQuantity>
                 </PurchaseItemInfoColun>
 
             </PurchaseItemInfo>
 
            
              <PurchaseItemArriveDate>{formatedPurchaseItemArriveDate}</PurchaseItemArriveDate>

            
 
             <BuyAgainButton >Comprar Novamente</BuyAgainButton>
             
         </PurchaseItem>

        
    
   )
 }