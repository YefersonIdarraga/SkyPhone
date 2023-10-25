import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/Main';

function PrivateRoute({ children }) {
    const { isLogged } = useContext(AuthContext);

    return isLogged ? children : <Navigate to="/" replace={true} />;
}

export default PrivateRoute;

