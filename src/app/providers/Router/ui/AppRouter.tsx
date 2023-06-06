import { selectUserAuthData } from 'entities/User';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const isAuth = useSelector(selectUserAuthData);
    return  <Routes>
        {Object.values(routerConfig).filter((route => (!route.authOnly || isAuth )))
            .map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className='pageWrapper'> 
                        <Suspense fallback={<PageLoader/>}>{element}</Suspense>
                    </div>}
                />
            ))}
    </Routes>;

};
