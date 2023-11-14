import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../img/logo-linkedin.svg"
import { HouseFill, PeopleFill } from "react-bootstrap-icons";
import { FaToolbox } from "react-icons/fa"
import { AiFillMessage } from "react-icons/ai"
import { IoMdNotifications } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"

export default function NavBar() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                {/* <h1>{process.env.REACT_APP_TOKEN}</h1> */}
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Linkedin
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="d-flex flex-column align-items-center">
                            <HouseFill className="hicon" />
                            Home
                        </Nav.Link>
                        <Nav.Link href="#rete" className="d-flex flex-column align-items-center">
                            <PeopleFill className="hicon" />
                            Rete
                        </Nav.Link>
                        <Nav.Link href="#jobs" className="d-flex flex-column align-items-center">
                            <FaToolbox className="hicon" />
                            Lavoro
                        </Nav.Link>
                        <Nav.Link href="#message" className="d-flex flex-column align-items-center">
                            <AiFillMessage className="hicon" />
                            Messagistica
                        </Nav.Link>
                        <Nav.Link href="#notify" className="position-relative d-flex flex-column align-items-center">
                            <IoMdNotifications className="hicon" />
                            Notifiche
                            <div className="position-absolute notify"></div>
                        </Nav.Link>
                        <Nav.Link href="#me" className="d-flex flex-column align-items-center">
                            <BiUserCircle className="hicon" />
                            Tu
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}