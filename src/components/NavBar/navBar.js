import React, { useState } from 'react';
import { Brand, BrandLink } from  '../../styles/styledComponents'
import { Navbar, NavbarToggler } from 'reactstrap';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed) 

  return(
    <Navbar>
        <Brand href={'https://www.meetcleo.com/'}> <BrandLink> Cleo. </BrandLink> </Brand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    </Navbar>
  )
}

export default NavBar