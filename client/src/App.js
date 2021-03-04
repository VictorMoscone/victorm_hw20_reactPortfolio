import './App.css';
import ContainerComp from './components/Container/ContainerComp';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
      </Header>
      <ContainerComp>
        <h1>Testing!</h1>
      </ContainerComp>
    </div>
  );
}

export default App;
