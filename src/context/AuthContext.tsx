import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies' 
import Router from 'next/router'

import { api } from "../services/api";


type User = {
  user_id:string;
  name:string;
  
}

type AuthContextData = {
  signIn: (email:string,password:string) => Promise<void>;
  signUp: (name:string,email:string,password:string) => Promise<void>;
  signOut: () => void;
  user: User;
  
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)




export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
 


  useEffect(() => {
    const { '@mercado-livre:token': token } = parseCookies()
    const { '@mercado-livre:user': user } = parseCookies()

    if (token && user) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      
      
      setUser(JSON.parse(user))
    }
  }, [])


  function signOut() {
    destroyCookie(undefined, '@mercado-livre:token')
    destroyCookie(undefined, '@mercado-livre:user')
    setUser(null)
  

    
    Router.push('/')
  }

  async function signIn(email:string,password:string):Promise<void> {
    try {
      const response = await api.post('/sessions', {email,password})

      const {user,token} = response.data

    
      setCookie(undefined, '@mercado-livre:token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite:'Lax'
      })
      setCookie(undefined, '@mercado-livre:user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite:'Lax'
      })

      
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(user)


  
      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  }
  async function signUp(name:string,email:string,password:string):Promise<void> {
    try {
      const response = await api.post('/users', {name,email,password})

      const {user,token} = response.data

    
      setCookie(undefined, '@mercado-livre:token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite:'Lax'
      })
      setCookie(undefined, '@mercado-livre:user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite:'Lax'
      })


      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      
      setUser(user)


      Router.push('/');
    } catch (err) {
      console.log(err);
    }
  }




  return (
    <AuthContext.Provider value={{signUp, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}