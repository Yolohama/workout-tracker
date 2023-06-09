import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "./Auth";

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Workout Tracker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user.isAdmin ? (
                            <Nav.Link as={Link} to="/exercises">
                                Exercises
                            </Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/plan">
                                    My Plan
                                </Nav.Link>
                                <Nav.Link as={Link} to="/session">
                                    Session
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        <NavDropdown
                            title={user.name}
                            id="basic-nav-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item as={Link} to="/profile">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/logout">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
