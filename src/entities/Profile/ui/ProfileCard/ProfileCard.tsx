import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    loading: boolean;
    className?: string;
    readOnly?: boolean;
    onChange: (value: Profile) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { data, className, loading, readOnly, onChange } = props;

    const { t } = useTranslation();

    if (loading)
        return (
            <HStack justify='center' align='center'>
                <Loader />
            </HStack>
        );

    const handleFormChange = (name: keyof Profile) => (value: string | number) => {
        if (value && name === 'age') value = Number(value);
        onChange({ [name]: value });
    };

    return (
        <div className={classNames(cls.cardWrapper, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatar}>
                    <Avatar src={data?.avatar} size={100} />
                </div>
            )}
            <form className={cls.form}>
                <VStack justify='center' align='stretch'>
                    <Input
                        id='firstName'
                        data-testid='ProfileCard.Firstname'
                        label={t('first-name')}
                        readOnly={readOnly}
                        className={cls.input}
                        value={data?.first}
                        onChange={handleFormChange('first')}
                    />

                    <Input
                        id='lastName'
                        data-testid='ProfileCard.Lastname'
                        label={t('last-name')}
                        readOnly={readOnly}
                        className={cls.input}
                        value={data?.lastname}
                        onChange={handleFormChange('lastname')}
                    />
                    <Input
                        id='userName'
                        data-testid='ProfileCard.Username'
                        label={t('user-name')}
                        readOnly={readOnly}
                        className={cls.input}
                        value={data?.username}
                        onChange={handleFormChange('username')}
                    />
                    <Input
                        id='userAge'
                        data-testid='ProfileCard.UserAge'
                        type='number'
                        label={t('age')}
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
                        label={t('avatar')}
                        readOnly={readOnly}
                        className={cls.input}
                        value={data?.avatar}
                        onChange={handleFormChange('avatar')}
                    />
                    <CurrencySelect
                        id='currency-select'
                        value={data?.currency}
                        className={cls.select}
                        disabled={readOnly}
                        onChange={handleFormChange('currency')}
                    />
                    <CountrySelect
                        id='country-select'
                        value={data?.country}
                        className={cls.select}
                        disabled={readOnly}
                        onChange={handleFormChange('country')}
                    />
                </VStack>
            </form>
        </div>
    );
};
