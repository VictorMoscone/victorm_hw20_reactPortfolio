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
              projectTitle="Project 1 - Hero Fight"
              projectDesc="Welcome to Team VBV's first fully functional product; Superhero Showdown. Do you like superheroes? Duh! Do you like supervillains? Maybe. What about having Harry Potter fight Lex Luthor? Sure, why not? On the Superhero Matchup page, you'll choose two characters to pit in the ULTIMATE death battle, just to see who would win via arbitrary statistics."
              github="https://github.com/VictorMoscone/vbv_project1"/>
          </Col>
        </Row>
        
        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 13 - Eat-Da-Burger"
              projectDesc="You're not you when you're hungry. Here, eat-da-burger. This app allows users to create their own burger menu and the devour each burger on the menu. Yum!"
              github="https://github.com/VictorMoscone/victorm_hw13_burger"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 12 - Employee Tracker"
              projectDesc="Management can be tough, much less running an entire business. It sure gets a lot easier when you're able to quickly view, add, and update a back-end spreadsheet of all of your busy-bees. This node app allows you to do just that, with a nice and simple step-by-step process."
              github="https://github.com/VictorMoscone/victorm_hw12_emptracker"/>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
              projectTitle="Homework 11 - Note Taker"
              projectDesc="This app exists to allow you, the ever busy gentleman or woman, to write down your innermost thoughts onto the internet. Brilliant! You can take notes, view old notes, and maybe even delete them."
              github="https://github.com/VictorMoscone/victorm_hw11_notetaker"/>
          </Col>
          <Col xs lg={3}>
            <Project 
              imageSrc="https://cdn.costumewall.com/wp-content/uploads/2019/12/Jotaro-Kujo.jpg" 
              imgName="Jotaro"
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
