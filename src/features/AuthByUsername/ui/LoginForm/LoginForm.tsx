import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { selectLoginState } from '../../model/selectors/selectLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, loading} = useSelector(selectLoginState);
    
    const handleUsernameChange = useCallback((name: string) => 
        dispatch(loginActions.setUsername(name)), [dispatch]);

    const handlePasswordChange = useCallback((ps: string) => 
        dispatch(loginActions.setPassword(ps)), [dispatch]);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({username, password}));
    },[dispatch, password, username]);


    return <form 
        className={classNames(cls.loginForm, {}, [className])}
        onSubmit={handleSubmit}>
        <Text title={t('login-form')}/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <Input
            id='username'
            label='Username'
            className={cls.input} 
            value={username} 
            onChange={handleUsernameChange}/>       
        <Input
            type="password"
            id='password' 
            label='Password'
            className={cls.input} 
            value={password} 
            onChange={handlePasswordChange}/> 
        <Button 
            className={cls.button}  
            variant={BtnVariant.BACKGROUND_INVERTED}
            disabled={loading}>
            {t('sign-in')}
        </Button>      
    </form>;
};