import { Outlet, Navigate } from 'react-router-dom';
//creare private route per i route che volgiamo protetti,
//usiamo Outlet che è uguale il children nel caso non abbiamo il route della condizione
function PrivateRoutes() {
    let login = window.localStorage.getItem('isLogedIn');
    return (
        !login ? <Navigate to="/login" /> : <Outlet/>
    );
}

export default PrivateRoutes;
