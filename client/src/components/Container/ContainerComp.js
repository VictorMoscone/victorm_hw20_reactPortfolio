import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerComp = ({children}) => {
    return (
        <Container fluid>
            {children}
        </Container>
    );
};

export default ContainerComp
