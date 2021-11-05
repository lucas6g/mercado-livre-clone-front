
import { 
    Container,
    HeaderContent,
    HeaderFirtLine,
    BigLogo,
    SmallLogo,
    InputContainer,
    SearchIcon,
    HeaderSecondLine,
    CepBox,
    LocationIcon,
    FirstNavMenu,
    SecundNavMenu,
    ShopingCartIcon,
    CepInfo,
    ShopingCartQuantity,
    DisneyPlus,
    LogOutButton


} from './HeaderStyles'

import {MdAccountCircle} from 'react-icons/md'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { api } from '../../services/api'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'




type Product =  {
    id:string,
    title:string,
    price:string,
    img_url:string
    
}

interface HeaderProps {
    setStaticProducts?:((products:Product[])=>void)
    staticProducts?:Product[]
}



export function Header({setStaticProducts,staticProducts}:HeaderProps){

    const [search,setSearch] = useState('')
    const [cartItemsQuantity,setCartItemsQuantity] = useState(0)


    const {user,signOut} = useContext(AuthContext)
    const {shoppingCart} = useContext(ShoppingCartContext)
    

        useEffect(()=>{

            const cartItemsTotalQuantity = shoppingCart.cartItems.reduce((total,cartItem)=>{
                return total + cartItem.quantity
            },0)

            setCartItemsQuantity(cartItemsTotalQuantity)

        },[shoppingCart.cartItems])
      


   async function handleProductSearch(product_title:string){
        const response = await api.get("/products/search",{
            params:{
               title:product_title 
            }
        })

        const products = response.data.map((product:Product)=>{
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

      
        setStaticProducts(products)
    
   }

  return (
    <Container>
        <HeaderContent>
            <HeaderFirtLine>

                <Link  href="/">
                    <a  >

                    <BigLogo src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/logo-pt__large_plus.png" alt="Logo" /> 
                    <SmallLogo src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__small.png" alt="Logo" /> 
                  </a>
                
                </Link>

              <InputContainer>
                <input 
                type="text"
                placeholder="Buscar Produtos Marcas e muito mais"
                name="search" 
                onChange={(e)=>{
                   setSearch(e.target.value)
                   if(e.target.value === ''){
                    setStaticProducts(staticProducts)
                   }
                }}
                value={search}
                  
                  />

                  
                <button onClick={()=>{

                    handleProductSearch(search)
                }} type="button">
                    <SearchIcon />
                </button>

              </InputContainer>
                <a href="">
                    <DisneyPlus src="https://http2.mlstatic.com/D_NQ_896114-MLA47305080821_082021-OO.webp" alt="Disney plus"  />

                </a>
               
            </HeaderFirtLine>
            <HeaderSecondLine>
                <CepBox>
                    <LocationIcon />
                    <CepInfo>
                        <span>informe seu</span>
                        <span>CEP</span>
                    </CepInfo>

                </CepBox>
                 <FirstNavMenu>
                    <ul>
                        <li>Categorias</li>
                        <li>Ofertas do Dia</li>
                        <li>Historico</li>
                        <li>Supermercado</li>
                        <li>Moda</li>
                        <li>Vender</li>
                        <li>Contato</li>
                    </ul>
                 </FirstNavMenu>
                 <SecundNavMenu>
                    <ul>
                      {user ? 
                           <li>
                           
                           <LogOutButton onClick={()=>{
                              signOut()
                           }}>
                                <MdAccountCircle size={24} color="#333"/> <span>{user.name}, Sair</span>
                           </LogOutButton>
                                
                            </li>
                        
                        :

                       <> 
                        <Link href="/signup">
                            
                        <li>
                            <a >
                                Crie a sua conta
                            </a>
                        </li>

                        </Link>
                        <Link href="/signin">
                        <li>
                            <a >
                               Entrar
                            </a>
                        </li>
                        </Link>
                        </>
                    
                    }  


                        <Link href="/purchases">
                        <li>

                            <a >
                                Compras
                            </a>
                        </li>
                        </Link>
                        
                        <Link href="/shoppingcart">
                        
                        
                        <li>

                            <a style={{display:'flex',alignItems:'center'}}>

                                <ShopingCartIcon />
                                <ShopingCartQuantity>{cartItemsQuantity}</ShopingCartQuantity>
                            </a>
                        </li>
                        </Link>
                        
                    </ul>
                 </SecundNavMenu>
            </HeaderSecondLine>
        </HeaderContent>
    </Container>
   
  )
}