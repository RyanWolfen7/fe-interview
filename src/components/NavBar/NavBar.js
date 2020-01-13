import React, { useState } from 'react';
import { BrandLink } from  '../../styles/styledComponents'
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed) 

  return(
    <div>
    <Navbar color="faded" light>
        <NavbarBrand href={'https://www.meetcleo.com/'}> <BrandLink> Cleo. </BrandLink> </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
              <NavItem>
                <NavLink href='/'> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/bills'> Bills </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/potentialBills'> Potential Bills </NavLink>
              </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar