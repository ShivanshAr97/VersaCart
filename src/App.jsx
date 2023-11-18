import DataItems from "./components/DataItems";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  return (
    
    <ShoppingCartProvider>
      <div className=" mx-8 border">
        <Navbar/>
        <div className="flex">
          <Options/>
          <DataItems />
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
