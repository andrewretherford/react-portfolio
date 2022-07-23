import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Row className="mt-4">
            <Col xs='auto'>
                <Link to='/' className="ms-3">AR</Link>
            </Col>
            <Col className="d-flex justify-content-center">
                <Link to='about' className="mx-5">About</Link>
                <Link to='work' className="mx-5">Work</Link>
                <Link to='experience' className="mx-5">Experience</Link>
            </Col>
            <Col xs='auto'>
                <span className="me-3">Contact</span>
            </Col>
        </Row>
    );
};

export default NavBar;