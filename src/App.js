import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Container className="p-3 shadow vh-100">
        <NavBar />
        <h2 className="my-5 text-center">Las ofertas de la semana</h2>
      </Container>
    </div>
  );
}

export default App;
