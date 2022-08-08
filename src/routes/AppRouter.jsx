import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import NotFound from "../components/NotFound";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import Cart from "../containers/Cart";
import OrderSearch from "../containers/OrderSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container className="p-3 shadow min-vh-100 d-flex flex-column justify-content-between">
        <div className="flex-grow-1">
          <NavBar />
          {/*Routes dentro de div para que flex funcione adecuadamente sobre los elementos*/}
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            ></Route>
            <Route
              path="/item/:productId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/ordersearch" element={<OrderSearch />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
};

export default AppRouter;
