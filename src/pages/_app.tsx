import {AppProps} from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../context/AuthContext'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import GlobalStyles from '../styles/global'


function MyApp({ Component, pageProps }:AppProps) {

 

  return(

     <AuthProvider >
    <ShoppingCartProvider>

      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>mercado livre</title>
      </Head>

      <Component {...pageProps} />

    <GlobalStyles />
    </ShoppingCartProvider>
      </AuthProvider>


  )
}

export default MyApp
