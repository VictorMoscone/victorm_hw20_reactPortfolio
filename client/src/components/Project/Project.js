import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => {
    return (
        <div>
            <Card className="bg-dark text-white my-2" style={{ height: '35rem' }}>
                <a href={props.github} target="_blank">
                    <Card.Img variant="top" src={props.imageSrc} alt={props.imgName} />
                </a>
                <Card.Body>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text>
                        {props.projectDesc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Project
