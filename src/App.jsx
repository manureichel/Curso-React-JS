import NavBar from "./components/header/Navbar";
import ItemListContainer from "./components/main/ItemListContainer";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenido!"} />
    </div>
  );
}

export default App;
