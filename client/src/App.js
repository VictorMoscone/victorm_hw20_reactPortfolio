import { Row } from 'react-bootstrap';
import './App.css';
import ContainerComp from './components/Container/ContainerComp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';

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

      <Home />

      <ContainerComp>
        <Row>
          <Footer />
        </Row>
      </ContainerComp>
    </div>
  );
};

export default App;
