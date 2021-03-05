import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerComp = ({children}) => {
    return (
        <Container fluid="true">
            {children}
        </Container>
    );
};

export default ContainerComp
