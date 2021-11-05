

import {Container,BigLogo,Header,Form,Footer,HeaderContent,FormTitle,SmallLogo} from '../styles/pages/SignInStyles'
import Link from 'next/link'
import { Button } from '../components/Button/Button'
import { Input } from '../components/Input/Input'
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import Router from 'next/router'
import { AuthContext } from '../context/AuthContext';
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'


type SignInFormData = {
  email: string;
  password: string;
  
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
  password: yup.string().required('Senha obrigátoria').min(6, 'Mínimo 6 caracteres'),
  
})

export default function Signin() {

  const {signIn} = useContext(AuthContext)

  const [isLoading,setLoading] = useState(false)
  
  
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
    
  const handleSignIn = async (values:SignInFormData) => {

    const {email,password} = values

    setLoading(true)
    await signIn(email,password)
    setLoading(false)
   
    
   
  }

  
    
  return (
    <Container>
        <Header >

            <HeaderContent>

            <Link href="/">
            <a >
              <BigLogo src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/logo-pt__large_plus.png" alt="Logo" /> 
              <SmallLogo src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__small.png" alt="Logo" /> 
            </a>

            </Link>

              <Link href="#">
                <a > Contato</a>
            </Link>

            </HeaderContent>
        </Header>

        <Form onSubmit={handleSubmit(handleSignIn)}>
            <FormTitle>Olá! Digite  e-mail e senha</FormTitle>   

            <Input 
            register={register}
            error={errors.email}
            label="E-mail"
            name="email"
            type="email"
         
            />
            <Input  
              register={register}
              error={errors.password}
              label="Senha"
              name="password"
              type="password"
          
              />

            <Button isLoading={isLoading} >Entrar</Button>
            <Button  onClick={()=>{
                Router.push('/signup')
            }} >Ainda Nao Possui uma Conta ?</Button>
        </Form>

        <Footer>
            
            <strong>Como cuidamos da sua privacidade  </strong>
            <span>Copyright © 1999-2021 Ebazar.com.br LTDA.</span>
        </Footer>
    </Container>
     
  )
}
