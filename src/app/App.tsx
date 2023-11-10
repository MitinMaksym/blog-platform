import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { initUserData, selectUserInited } from '@/entities/User';
import { USER_DATA_KEY } from '@/shared/const/localstorage';
import { AppRouter } from './providers/Router';

import '@/shared/config/i18n/i18n';
import './styles/index.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

export const App = () => {
    const dispatch = useAppDispatch();
    const userInited = useSelector(selectUserInited);

    useEffect(() => {
        const storedUserId = localStorage.getItem(USER_DATA_KEY);

        dispatch(initUserData(storedUserId));
    }, [dispatch]);

    if (!userInited) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='contentPage'>
                    <Sidebar />
                    {userInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
