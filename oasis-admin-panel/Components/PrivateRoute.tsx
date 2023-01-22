import { useRouter } from 'next/router'
import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { NextComponentType, NextPageContext } from 'next'

const PrivateRoute = ({children}:{children:NextComponentType<NextPageContext, any, any>}) => {
    const router = useRouter()
    const {isAuth} = React.useContext(AuthContext)
    if (!isAuth){
        router.push('/login')
    }
  return (
    {children}
  )
}

export default PrivateRoute