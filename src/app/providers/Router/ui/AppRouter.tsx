import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  
    <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={<div className='pageWrapper'> 
                    <Suspense fallback={<PageLoader/>}>{element}</Suspense>
                </div>}
            />
        ))}
    </Routes>

);
