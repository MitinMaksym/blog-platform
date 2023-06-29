import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInited, userActions } from 'entities/User';
import { USER_DATA_KEY } from 'shared/const/localstorage';

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
