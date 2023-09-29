import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserAuthData, selectUserRoles, UserRole } from '@/entities/User';
import { routes } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    allowedRoles: Array<UserRole>;
}

export function RequireAuth({ children, allowedRoles }: RequireAuthProps) {
    const userData = useSelector(selectUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(selectUserRoles);
    const hasRequiredRoles = useMemo(
        () => userRoles.find((role) => allowedRoles.includes(role)),
        [userRoles, allowedRoles],
    );

    if (userData && (hasRequiredRoles || allowedRoles.length === 0)) {
        return children;
    }
    return userData ? (
        <Navigate to={routes.forbidden()} state={{ from: location }} replace />
    ) : (
        <Navigate to={routes.main()} state={{ from: location }} replace />
    );
}
