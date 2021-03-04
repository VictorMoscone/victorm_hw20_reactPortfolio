import { Col, Row } from 'react-bootstrap';
import './App.css';
import ContainerComp from './components/Container/ContainerComp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
      </Header>
      <ContainerComp>
        <Row>
          <Col md={6}>
            <Project />
          </Col>
          <Col md={6}>
            <Project />
          </Col>
        </Row>
      </ContainerComp>
      <Footer />
    </div>
  );
}

export default App;
