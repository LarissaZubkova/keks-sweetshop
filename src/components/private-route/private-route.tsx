import { Navigate, Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

const PrivateRoute = ({authorizationStatus}: PrivateRouteProps) => authorizationStatus === AuthorizationStatus.Auth ? <Outlet /> : <Navigate to="/login" />;

export default PrivateRoute;
