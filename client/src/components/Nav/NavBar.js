import React from 'react'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


const NavBar = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" className="textColor">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about" className="textColor">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact" className="textColor">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBar
