import { CountrySelect } from 'entities/Country';
import { CurrencySelect } from 'entities/Currency';
import {  FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile
    loading: boolean
    error?: string
    className?: string
    readOnly?: boolean
    onChange:(value: Profile) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        data, 
        className, 
        loading, 
        error, 
        readOnly, 
        onChange
    } = props;

    if (loading) return <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader/>
    </div>;

    if (error) return <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text title='Error' text={error} theme={TextTheme.ERROR}/>
    </div>;

    const handleFormChange = (name: keyof Profile) => (value: string) =>{
        onChange({[name]: value});
    };
    
    return <div className={classNames(cls.cardWrapper, {}, [className])}>
        {data?.avatar && <div className={cls.avatar}>
            <Avatar src={data?.avatar} size={100}/>
        </div>}
        <form className={cls.form}>
            <Input 
                id='firstName'
                label='First name' 
                readOnly={readOnly}
                className={cls.input} 
                value={data?.first}
                onChange={handleFormChange('first')}/>
                
            <Input 
                id='lastName' 
                label='Last name' 
                readOnly={readOnly}
                className={cls.input}  
                value={data?.lastname}
                onChange={handleFormChange('lastname')}
            />
            <Input 
                id='userName' 
                label='User name' 
                readOnly={readOnly}
                className={cls.input}  
                value={data?.username}
                onChange={handleFormChange('username')}
            />
            <Input 
                id='userAge' 
                label='Age' 
                readOnly={readOnly}
                className={cls.input}  
                value={data?.age}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                onChange={handleFormChange('age')}
            />
            <Input 
                id='avatar' 
                label='Avatar' 
                readOnly={readOnly}
                className={cls.input}  
                value={data?.avatar}
                onChange={handleFormChange('avatar')}
            />
            <CurrencySelect 
                id="currency" 
                value={data?.currency} 
                className={cls.input}
                disabled={readOnly}
                onChange={handleFormChange('currency')}
            />
            <CountrySelect 
                id="country" 
                value={data?.country} 
                className={cls.input}
                disabled={readOnly}
                onChange={handleFormChange('country')}
            /> 
        </form>
    </div>;
};