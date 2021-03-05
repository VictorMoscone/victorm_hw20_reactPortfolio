import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => {
    return (
        <div>
            <Card className="bg-dark text-white my-2">
                <Card.Img src={props.imageSrc} alt={props.imgName} />
                <Card.ImgOverlay>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text>
                    {props.projectDesc}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Project
