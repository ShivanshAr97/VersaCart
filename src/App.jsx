import DataItems from "./components/DataItems";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <DataItems />
    </ShoppingCartProvider>
  );
}

export default App;
