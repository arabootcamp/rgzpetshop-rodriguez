import React from "react";
import AuthProvider from "./context/AuthContext";
import CategoriesProvider from "./context/CategoriesContext";
import CartProvider from "./context/CartContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
