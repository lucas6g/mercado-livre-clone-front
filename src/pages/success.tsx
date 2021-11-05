

import {Container,} from '../styles/pages/SuccessStyles'

import { Button } from '../components/Button/Button'
import { Header } from '../components/Header/Header'
import Lottie from 'react-lottie';
import * as animationData from '../animations/order_confirmed.json'


import Router from 'next/router'
import { requireSSRAuth } from '../utils/requireSSRAuth';




export default function Success() {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

  
    
  return (
    <>
        <Header />
    <Container>

        <main>
             <Lottie options={defaultOptions}
              height={320}
              width={320}
              />

            <p>Pedido Confirmado com Sucesso</p>
            <Button onClick={()=> Router.push('/purchases')} >Ir para minhas Compras</Button>

        </main>


          
    </Container>
    </>
     
  )
}

export const getServerSideProps = requireSSRAuth(async (ctx) => {
  
  
  return {
    props: {}
  }
})
