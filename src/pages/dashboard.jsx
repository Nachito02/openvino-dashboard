import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'


const dashboard = () => {

  const router = useRouter()

  
  const [{ data: accountData }, disconnect] = useAccount()

  const session = useSession()

   
  return (
    console.log(session)
  )
}

export default dashboard

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination:'/',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}