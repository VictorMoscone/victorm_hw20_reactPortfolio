import React from 'react'
import { Row } from 'react-bootstrap';
import ContainerComp from '../Container/ContainerComp';
import NavBar from '../Nav/NavBar';
import "./styles.css";

const Header = () => {
    return (
        <header className="header">
            <ContainerComp >
                <Row>
                    <NavBar />
                </Row>
            </ContainerComp>
        </header>
    );
};

export default Header
