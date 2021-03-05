import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
