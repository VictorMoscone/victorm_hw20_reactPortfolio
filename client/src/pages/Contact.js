import React from 'react'
import { Button, Row } from 'react-bootstrap';
import ContainerComp from '../components/Container/ContainerComp'

const Contact = () => {
    return (
        <div>
            <ContainerComp>
                    <Button variant="primary" size="lg" href="https://github.com/VictorMoscone" target="_blank" rel="noreferrer">
                        My GitHub
                    </Button>{' '}
                    <Button variant="secondary" size="lg" href="https://www.linkedin.com/in/victor-moscone-bb270a85/" target="_blank" rel="noreferrer">
                        My LinkedIn
                    </Button>
                    <p>
                        Email Address: victormoscone@example.com
                    </p>
                    <p>
                        Phone Number: (555) 555-5561
                    </p>
            </ContainerComp>
        </div>
    );
};

export default Contact
