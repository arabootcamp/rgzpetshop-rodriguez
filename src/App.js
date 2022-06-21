import './App.scss';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Container className="p-3 shadow vh-100">
        <NavBar />
        <ItemListContainer greeting="Hola, mensaje desde props" />
      </Container>
    </div>
  );
}

export default App;
