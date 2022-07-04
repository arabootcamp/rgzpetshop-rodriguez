import './App.scss';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
//import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      < Container className = "p-3 shadow min-vh-100" >
        <NavBar />
        {/*<ItemListContainer greeting="Hola, mensaje desde props" />*/}
        <ItemDetailContainer />
      </Container>
    </div>
  );
}

export default App;
