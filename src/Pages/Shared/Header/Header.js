// import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
import logo from '../../../Images/Logo/warehouse-logo.jpg';
import './Header.css';

const Header = () => {
    // const [user] = useAuthState(auth);

    // const handleSignOut = () => {
    //     signOut(auth);
    // }

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
                            <Nav.Link className='nav-style' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='nav-style' href="home#services">Journalism</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/blogs">Blogs</Nav.Link>

                            <NavDropdown className='nav-style text-light' title="News" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/breaking/3.1">Breaking</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/world/3.2">World</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/exclusive/3.3">Exclusive</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/feature/3.4">Feature</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/travel/3.5">Travel</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/sport/3.6">Sport</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='nav-style' as={Link} to="/about">About</Nav.Link>
                            {/* {
                                user ?
                                    <button style={{ backgroundColor: 'black', color: 'white' }} className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='nav-style' as={Link} to="/login">
                                        Login
                                    </Nav.Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;