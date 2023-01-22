import React from 'react'
import { useAppSelector } from '../Redux/app.hooks'
import { useRouter } from 'next/router'
const PrivateRoute = ({children}:{children:any}) => {
    const router = useRouter()
    const {isAuth} = useAppSelector(store=>store.Auth)
    React.useEffect(()=>{
        // const ls_id = localStorage.getItem('adminID-oasis')
        if (router.pathname==="/login") return
        if (!isAuth){
            if (router) router.push('/login')
        }
    }, [router.pathname])
    React.useEffect(()=>{
        if (isAuth){
            router.push('/')
        } else {
            router.push('/login')
        }
    }, [isAuth])
  return (
    <>
        {children}
    </>
  )
}

export default PrivateRoute