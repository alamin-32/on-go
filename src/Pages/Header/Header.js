import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  console.log(user);
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="logo-area" as={Link} to="/">
          On Go
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ms" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link-area text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link-area text-white" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="link-area text-white" as={Link} to="/reviews">
              Reviews
            </Nav.Link>
            <NavDropdown
              className="link-area text-danger "
              title="Information"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="link-area " as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
              <NavDropdown.Item className="link-area " as={Link} to="/about">
                About
              </NavDropdown.Item>
            </NavDropdown>
            {user ? (
              <button className="logout-btn" onClick={logout}>
                Log out
              </button>
            ) : (
              <Nav.Link className="link-area text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar className="header sticky-top">
    //   <Container className="link-container">
    //     <div className="logo-area">
    //       <Nav as={Link} to="/">
    //         On Go
    //       </Nav>
    //     </div>
    //     <div>
    //       <Nav className="">
    //         <Nav className="link-area" as={Link} to="/home">
    //           Home
    //         </Nav>
    //         <Nav className="link-area" as={Link} to="/services">
    //           Services
    //         </Nav>
    //         <Nav className="link-area" as={Link} to="/reviews">
    //           Reviews
    //         </Nav>
    //         <Nav className="link-area" as={Link} to="/blogs">
    //           Blogs
    //         </Nav>
    //         <Nav className="link-area" as={Link} to="/about">
    //           About
    //         </Nav>

    //         {user ? (
    //           <button className="logout-btn" onClick={logout}>
    //             Log out
    //           </button>
    //         ) : (
    //           <Nav className="link-area" as={Link} to="/login">
    //             Login
    //           </Nav>
    //         )}
    //       </Nav>
    //     </div>
    //   </Container>
    // </Navbar>

    // <div className="header sticky-top">
    //   <div>
    //     <Link className="logo-area" to="/">
    //       On Go
    //     </Link>
    //   </div>
    //   <div className="link-container">
    //     <Link className="link-area" to="/">
    //       Home
    //     </Link>
    //     <Link className="link-area" to="/services">
    //       Services
    //     </Link>
    //     <Link className="link-area" to="/reviews">
    //       Reviews
    //     </Link>
    //     <Link className="link-area" to="/blogs">
    //       Blogs
    //     </Link>
    //     <Link className="link-area" to="/about">
    //       About
    //     </Link>
    //     {user ? (
    //       <button className="logout-btn" onClick={logout}>
    //         Log out
    //       </button>
    //     ) : (
    //       <Link className="link-area" to="/login">
    //         LogIn
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
