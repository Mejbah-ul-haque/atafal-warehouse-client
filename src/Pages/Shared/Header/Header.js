import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo/warehouse-logo.jpg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar className='py-0' collapseOnSelect expand="lg" bg="white" sticky='top' variant="light">
                <Container className='px-3  bg-body'>
                    <Navbar.Brand style={{ fontSize: "2rem", color: 'black' }} as={Link} to="/">
                        <img src={logo} height='60' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-style nav-item' as={Link} to="/">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='nav-style nav-item' as={Link} to="manage">ManageItems</Nav.Link>
                                    <Nav.Link className='nav-style nav-item' as={Link} to="manage">AddItem</Nav.Link>
                                    <Nav.Link className='nav-style nav-item' as={Link} to="manage">MyItems</Nav.Link>

                                </>
                            }
                            {/* <Nav.Link className='nav-style nav-item' href="home#items">ITEMS</Nav.Link> */}
                            <Nav.Link className='nav-style nav-item' as={Link} to="/blog">Blog</Nav.Link>

                            <NavDropdown className='nav-style text-light nav-item' title="Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item className='nav-item' as={Link} to="/laptop/3.1">Laptop</NavDropdown.Item>
                                <NavDropdown.Item className='nav-item' as={Link} to="/mobile/3.2">Mobile</NavDropdown.Item>
                                <NavDropdown.Item className='nav-item' as={Link} to="/watch/3.3">Smartwatch</NavDropdown.Item>
                                <NavDropdown.Item className='nav-item' as={Link} to="/iron/3.4">Iron</NavDropdown.Item>
                                <NavDropdown.Item className='nav-item' as={Link} to="/airPods/3.5">AirPods</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='nav-item' as={Link} to="/others/3.6">Others</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='nav-style nav-item' as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    <button className='border-0 bg-white text-dark fw-bold btn-link nav-item text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link className='nav-style nav-item text-dark fw-bold' as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;