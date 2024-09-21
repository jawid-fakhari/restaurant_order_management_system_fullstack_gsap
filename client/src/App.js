import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Menu from './pages/menu/Menu';
import Home from './pages/home/Home';
import Tables from './pages/tables/Tables';
import Checkout from './pages/checkout/Checkout';
import Clients from './pages/clienti/Clients';
import Signup from './pages/signup-signin/Signup';
import Login from './pages/signup-signin/Login';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/signup" element={<Signup />} />

                <Route element={<PrivateRoutes />}>
                    {/* il route protetto dal PrivateRoutes */}
                    <Route path="/admin" element={<Admin />} />
                </Route>

                <Route path="/login" element={<Login />} />

                <Route path="/menu/:tableNumber" element={<Menu />} />
                <Route
                    path="/checkout/:tableNumber/:id/:amount"
                    element={<Checkout />}
                />
            </Routes>
        </>
    );
}

export default App;
