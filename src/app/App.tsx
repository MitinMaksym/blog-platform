import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { selectUserInited, userActions } from '@/entities/User';
import { USER_DATA_KEY } from '@/shared/const/localstorage';
import { AppRouter } from './providers/Router';

export const App = () => {
    const dispatch = useDispatch();
    const userInited = useSelector(selectUserInited);

    useEffect(() => {
        const storageAuthData = localStorage.getItem(USER_DATA_KEY);
        dispatch(userActions.initAuthData(storageAuthData ? JSON.parse(storageAuthData) : undefined));
        

    }, [dispatch]);

    return <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className='contentPage'>
                <Sidebar />
                {userInited && <AppRouter />}
            </div>
        </Suspense>
    </div>;
};
