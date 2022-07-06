import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Container className = "p-3 shadow min-vh-100" >
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:id' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Container>
   </BrowserRouter> 
  );
}

export default App;
