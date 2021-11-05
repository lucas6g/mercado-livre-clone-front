
import {Header} from '../components/Header/Header'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import {CarrosselContainer,ProductCardContainer,Carousel} from '../styles/pages/HomeStyles'
import { ProductCard } from '../components/Product/ProductCard'
import { GetStaticProps } from 'next'
import { api } from '../services/api'
import { useState } from 'react'







type Product =  {
    id:string,
    title:string,
    price:string,
    img_url:string
    
}

interface HomeProps { 
    products:Product[]
    
}
  


export default function Home({products}:HomeProps) {

    const [staticProducts,setStaticProducts] = useState(products)
  
  return (    

      <>
      <Header 
        setStaticProducts={setStaticProducts}
        staticProducts={products}
      />
            <CarrosselContainer>
            <Carousel  autoPlay  infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_956657-MLA47668922118_092021-OO.webp" />
                 
                </div>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_693155-MLA47695140521_092021-OO.webp" />
                   
                </div>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_687012-MLA47631813478_092021-OO.webp" />
                   
                </div>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_925136-MLA47679433912_092021-OO.webp" />
                   
                </div>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_909306-MLA47662201568_092021-OO.webp" />
                   
                </div>
                <div>
                    <img src="https://http2.mlstatic.com/D_NQ_736343-MLA47631602649_092021-OO.webp" />
                   
                </div>
            </Carousel>



           </CarrosselContainer>
           
            <ProductCardContainer  >
                
                {staticProducts.length === 0 && <span>Nunhum Produto Encontrado</span>}
                {
                    
             
            staticProducts.map((product)=>{
                        return (

                            <ProductCard 
                                key={product.id}
                                id={product.id}
                                img_url={product.img_url}
                                price={product.price}
                                title={product.title}

                            />
                        )
                    })
                    
                }
        
            </ProductCardContainer>

      </>
  )
}


export const getStaticProps:GetStaticProps = async () =>{
   
    const response  = await api.get('/products')

    const products = response.data.map((product)=>{
        return {
            id:product.id,
            title:product.title,
            img_url:product.img_url,
            price:new Intl.NumberFormat('pt-BR',
            {style:'currency',
            currency:'BRL'
      
             }).format(Number(product.price)) 
        }
    })

  

    return {
      props: {
          products
      },
      revalidate: 60 * 60 * 1 //1 haur
    }
  } 



