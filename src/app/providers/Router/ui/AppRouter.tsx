import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps, routerConfig } from '../config/routerConfig';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, authOnly, roles = [] } = route;
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth allowedRoles={roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};
