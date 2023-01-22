import React from 'react'
import { useAppSelector } from '../Redux/app.hooks'
import { useRouter } from 'next/router'
const PrivateRoute = ({children}:{children:any}) => {
    const router = useRouter()
    const {isAuth} = useAppSelector(store=>store.Auth)
    React.useEffect(()=>{
        // const ls_id = localStorage.getItem('adminID-oasis')
        if (!isAuth && router.pathname!=="/login"){
            if (router) router.push('/login')
        }
    }, [router.pathname, isAuth])
    React.useEffect(()=>{
        if (isAuth){
            router.back()
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