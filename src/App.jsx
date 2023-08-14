import DataItems from "./components/DataItems";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  return (
    
    <ShoppingCartProvider>
      <div className=" mx-12">
        <Navbar/>
        <DataItems />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
