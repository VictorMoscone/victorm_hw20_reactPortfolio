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
        <Row>
          <Header>
            <NavBar />
          </Header>
        </Row>
      </ContainerComp>

      <ContainerComp>
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Project 2 - Inhumans"
              projectDesc="This was a project that required us to build an application using MySQL and CRUD functionality. My particular repo is an older version, in which the code I worked on was visible."
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 13 - Eat-Da-Burger"
              projectDesc="You're not you when you're hungry. Here, eat-da-burger. This app allows users to create their own burger menu and the devour each burger on the menu. Yum!"
              github="https://github.com/VictorMoscone/victorm_hw13_burger"/>
          </Col>
        </Row>
        
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12"
              projectDesc="Example"
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
        </Row>
      </ContainerComp>

      <ContainerComp>
        <Row>
          <Footer />
        </Row>
      </ContainerComp>
    </div>
  );
};

export default App;
