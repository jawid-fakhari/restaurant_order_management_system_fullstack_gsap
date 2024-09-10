import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Menu from "./pages/menu/Menu";
import Home from "./pages/home/Home";
import Tables from "./pages/tables/Tables";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu/:tableNumber" element={<Menu />} />
        <Route path="/checkout/:tableNumber/:id" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
