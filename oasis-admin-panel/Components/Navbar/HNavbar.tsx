import React from 'react'
import DeskTopNav from './DesktopNav'
import MobileNav from './MobileNav'

const HNavbar = ():JSX.Element => {
  return (
    <>
      <DeskTopNav/>
      <MobileNav/>
    </>
  )
}

export default HNavbar