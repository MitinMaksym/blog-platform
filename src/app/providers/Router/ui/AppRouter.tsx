import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routerConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from '..';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const {path, authOnly} = route;
        const element = <Suspense fallback={<PageLoader/>}>
            <div className='pageWrapper'> 
                {route.element}
            </div>
        </Suspense>;

        return  <Route
            key={path}
            path={path}
            element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />;
    }, []);
    return  <Routes>
        {Object.values(routerConfig).map(renderWithWrapper)}
    </Routes>;

};
