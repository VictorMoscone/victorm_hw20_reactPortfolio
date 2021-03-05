import React from 'react'
import { Row } from 'react-bootstrap';
import ContainerComp from '../Container/ContainerComp';
import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ContainerComp>
                <Row>
                    <h1 className="footerText">
                        © 2021 Victor Moscone. All Rights Reserved.
                    </h1>
                </Row>
            </ContainerComp>
        </footer>
    );
};

export default Footer
