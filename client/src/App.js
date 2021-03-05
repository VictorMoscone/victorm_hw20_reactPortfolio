import { Col, Row } from 'react-bootstrap';
import './App.css';
import ContainerComp from './components/Container/ContainerComp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import Project from './components/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ContainerComp>
        <Header>
          <NavBar />
        </Header>
      </ContainerComp>
      <ContainerComp>
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"/>
          </Col>
          <Col xs lg={3}>
            <Project 
                imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
                imgName="Jotaro"
                projectTitle="Homework 12"
                projectDesc="Example"/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"/>
          </Col>
          <Col xs lg={3}>
            <Project 
                imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
                imgName="Jotaro"
                projectTitle="Homework 12"
                projectDesc="Example"/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"/>
          </Col>
          <Col xs lg={3}>
            <Project 
                imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
                imgName="Jotaro"
                projectTitle="Homework 12"
                projectDesc="Example"/>
          </Col>
        </Row>
      </ContainerComp>
      <Footer />
    </div>
  );
};

export default App;
