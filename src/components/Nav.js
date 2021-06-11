import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/nav.sass'
import logo from "../assets/images/logo.png"

export default () => (
 
    <Navbar className="background-" expand="lg" variant="dark">
     <div className="container">
    <Navbar.Brand href="/">
      <img src={logo} height="85"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="app-nav" />
    <Navbar.Collapse id="app-nav" >
      <Nav className="ml-auto">
        <Nav.Link href="#" className="text-white">Assets</Nav.Link>
        <Nav.Link href="#" className="text-white">Staking</Nav.Link>
        <Nav.Link href="#" className="text-white">Earn</Nav.Link>
        <Nav.Link href="#" className="text-white">NFTs</Nav.Link>
        <Nav.Link href="#" className="text-white">DApp </Nav.Link>
        <Nav.Link href="#" className="text-white">Language</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
 
)