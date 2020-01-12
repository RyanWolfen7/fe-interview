import React, { useState } from 'react';
import { Nav, Brand, BrandLink, MCLogo } from  '../../styles/styledComponents'

const NavBar = () => {

  return(
    <Nav height={'4rem'} justifyContent={'flex-end'}>
        <Brand href={'https://www.meetcleo.com/'}> <BrandLink> Cleo. </BrandLink> </Brand>
        <Brand href={'/'}>  </Brand>
    </Nav>
  )
}

export default NavBar