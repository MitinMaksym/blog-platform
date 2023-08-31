import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserAuthData, selectUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/routerConfig';

interface RequireAuthProps {
    children: JSX.Element
    allowedRoles: Array<UserRole>
}

export function RequireAuth({ children, allowedRoles }: RequireAuthProps) {
    const userData = useSelector(selectUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(selectUserRoles);
    const hasRequiredRoles = useMemo(
        () => userRoles.find((role) => allowedRoles.includes(role)),
        [userRoles, allowedRoles]
    );
  

    if(userData && (hasRequiredRoles || allowedRoles.length === 0)){
        return children;
    } 
    return userData ? (
        <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    ) : (
        <Navigate to={RoutePath.main} state={{ from: location }} replace />);
    

}