import React from 'react'
import DeskTopNav from './DesktopNav'
import MobileNav from './MobileNav'

import { useRouter } from 'next/router'
import { AuthContext } from '../../Contexts/AuthContext'
const HNavbar = ():JSX.Element => {
  const router = useRouter()
  const {isAuth} = React.useContext(AuthContext)
  React.useEffect(() => {
    if (router) {
      if (!isAuth){
        router.push('/login')
      }
    }
   }, [router]);
  
  return (
    <>
      <DeskTopNav/>
      <MobileNav/>
    </>
  )
}

export default HNavbar