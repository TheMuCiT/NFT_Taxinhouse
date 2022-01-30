import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as Logo } from '../../icons/Logo.svg'

import './navbar.css'
const Navbar = () => {
     const [Mobile, setMobile] = useState(false)
     useEffect(() => {
          WindowChange()
     }, [])

     const HandleMobileMenu = () => {
          setMobile(!Mobile)
     }

     const WindowChange = () => {
          if (window.innerWidth > 1050) {
               setMobile(false)
          }
     }

     window.addEventListener('resize', WindowChange)
     return (
          <div className='navbar'>
               <div className='navbarMobile'>
                    <div className='navbarCenterIcon'>
                         <div className='navbarMobileTopRight '>
                              <Logo />
                         </div>
                    </div>
               </div>
               <div className='navbarMobileButton' onClick={HandleMobileMenu}>
                    <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} />
                    <div className='navbarMobileContainer'>
                         <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
                              <div className='navbarMenuContainer'>
                                   <div className='navbarMobileTop'>
                                        <div className='navbarMobileTopRight menuOpen'>
                                             <Logo />
                                        </div>
                                        <div className='navbarMobileTopLeft'>
                                             <Close className='CloseIcon' onClick={HandleMobileMenu} />
                                        </div>
                                   </div>
                                   <div className='navbarMobileMain'>
                                        <div className='navbarCenterLink opacity7'>About Us</div>
                                        <div className='navbarCenterLink opacity7'>Blog</div>
                                        <div className='navbarCenterLink opacity7'>Business Soliutions</div>
                                        <div className='navbarCenterLink opacity7'>Opportunities</div>
                                        <div className='navbarCenterLink opacity7'>Location</div>
                                        <div className='navbarCenterLink opacity7'>Contact</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='navbarContainer SlideRightAnimation'>
                    <div className='navbarLeft'>
                         <div className='navbarLeftLogo '>
                              <Logo />
                         </div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightItem'>About Us</div>
                         <div className='navbarRightItem'>Blog</div>
                         <div className='navbarRightItem'>Business Soliutions</div>
                         <div className='navbarRightItem'>Opportunities</div>
                         <div className='navbarRightItem'>Location</div>
                         <div className='navbarRightItem'>Contact</div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
