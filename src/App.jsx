import NavBar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
