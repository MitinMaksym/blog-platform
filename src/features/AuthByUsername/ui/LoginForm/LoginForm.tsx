import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const {t} = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsernameChange = (name: string) => setUsername(name);
    const handlePasswordChange = (password: string) => setPassword(password);

    return <form className={classNames(cls.loginForm, {}, [className])}>
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
            variant={BtnVariant.BACKGROUND_INVERTED}>{t('sign-in')}</Button>      
    </form>;
};