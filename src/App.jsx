import NavBar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
