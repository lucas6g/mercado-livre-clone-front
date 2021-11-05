import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";



export function requireSSRAuth(fn: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx);
    const token = cookies['@mercado-livre:token'];

    if (!token) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        }
      }
    }
    return await fn(ctx)


   
    
  }
}