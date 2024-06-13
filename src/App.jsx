import DataItems from "./components/DataItems";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="grid grid-cols-6">
        <div className="col-span-1 border">
          <Options />
        </div>
        <div className="col-span-5">
          <DataItems />
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
