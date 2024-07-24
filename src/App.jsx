import React from "react";
import { Provider } from "react-redux";
import { productStore } from "./feature/ProductStore";
import ProductDisplay from "./components/ProductDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={productStore}>
      <ProductDisplay />
    </Provider>
  );
}

export default App;
