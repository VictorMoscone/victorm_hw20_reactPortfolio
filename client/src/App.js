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
              imageSrc="https://user-images.githubusercontent.com/71304781/105945958-266d1a80-601b-11eb-9c8b-12d820538f76.png" 
              imgName="project2-img"
              projectTitle="Project 2 - Inhumans"
              projectDesc="This was a project that required us to build an application using MySQL and CRUD functionality. My particular repo is an older version, in which the code I worked on was visible."
              github="https://github.com/VictorMoscone/inhumans"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://user-images.githubusercontent.com/70674522/99157582-04e8cd80-267f-11eb-99c3-d7fcd09451fe.PNG" 
              imgName="project1-img"
              projectTitle="Project 1 - Hero Fight"
              projectDesc="Welcome to Team VBV's first fully functional product; Superhero Showdown. Do you like superheroes? Duh! Do you like supervillains? Maybe. What about having Harry Potter fight Lex Luthor? Sure, why not? On the Superhero Matchup page, you'll choose two characters to pit in the ULTIMATE death battle, just to see who would win via arbitrary statistics."
              github="https://github.com/VictorMoscone/vbv_project1"/>
          </Col>
        </Row>
        
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://user-images.githubusercontent.com/70674522/104412684-a24a6b80-5521-11eb-8d7c-0a4fb69fc2fe.PNG" 
              imgName="hw13-img"
              projectTitle="Homework 13 - Eat-Da-Burger"
              projectDesc="You're not you when you're hungry. Here, eat-da-burger. This app allows users to create their own burger menu and the devour each burger on the menu. Yum!"
              github="https://github.com/VictorMoscone/victorm_hw13_burger"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://camo.githubusercontent.com/9d95acbbe50f1a31e19a0d3401bc62f1175625968009b9002c4f2a372fa2b505/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4c474d64456e39367434492f302e6a7067" 
              imgName="hw12-img"
              projectTitle="Homework 12 - Employee Tracker"
              projectDesc="Management can be tough, much less running an entire business. It sure gets a lot easier when you're able to quickly view, add, and update a back-end spreadsheet of all of your busy-bees. This node app allows you to do just that, with a nice and simple step-by-step process."
              github="https://github.com/VictorMoscone/victorm_hw12_emptracker"/>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://user-images.githubusercontent.com/70674522/102582656-e596f300-40b7-11eb-9a0a-7f8b50dbc504.PNG" 
              imgName="hw11-img"
              projectTitle="Homework 11 - Note Taker"
              projectDesc="This app exists to allow you, the ever busy gentleman or woman, to write down your innermost thoughts onto the internet. Brilliant! You can take notes, view old notes, and maybe even delete them."
              github="https://github.com/VictorMoscone/victorm_hw11_notetaker"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://camo.githubusercontent.com/ef7b5d1bf86c577d161f5010adb3b66bad00cc8c673e10f1c77e0c10e29870dd/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f5767455f2d6654375965302f302e6a7067" 
              imgName="hw10-img"
              projectTitle="Homework 10 - Team Generator"
              projectDesc="Are you here to form your ultimate fantasy engineering team? Well, look no further! For the low-low price of $0, you can quicky build your own team website with little-to-no effort! Just answer some simple prompts and you'll be off to the races."
              github="https://github.com/VictorMoscone/victorm_hw10_teamGen"/>
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
