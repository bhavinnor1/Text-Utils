import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function RBNavBar(props) {
    return (
        <Navbar style={{
            backgroundColor: props.mode == "light" ? "white" : `${(document.body.style.backgroundColor.slice(0, -4).toString() + " " + (parseInt(document.body.style.backgroundColor.slice(-4, -1)) + 35).toString() + ")").toString()
                }`, boxShadow: `${props.mode == "light" ? "0 0 0" : "0px 0px 125px black"}`
        }}
            className={`navbar navbar-expand-lg navbar-${props.mode == "light" ? "light" : "dark"} ${props.mode == "light" ? "bg-light" : ""}`}
            expand="lg">
            <Container>
                <NavLink className="navbar-brand" href="/">{props.title}</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-link active">About</NavLink>
                    </Nav>
                    <Nav>
                        <div className="d-inline">
                            <button onClick={props.lavenderMode} className="lavender"></button>
                            <button onClick={props.greenMode} className="green"></button>
                            <button onClick={props.grayMode} className="gray"></button>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                onClick={props.toggleMode}
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                                    }`}
                                htmlFor="flexSwitchCheckDefault"
                            >
                                Enable {`${props.mode === "light" ? "Dark" : "Light"}`} Mode
                            </label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RBNavBar;
