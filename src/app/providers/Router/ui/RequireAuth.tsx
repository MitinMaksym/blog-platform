import { selectUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const userData = useSelector(selectUserAuthData);
    const location = useLocation();
  
    if (!userData) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
  
    return children;
}