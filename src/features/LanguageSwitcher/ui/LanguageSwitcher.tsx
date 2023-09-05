import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BtnVariant, Button } from '@/shared/ui/Button';
// import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
  short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo((props) => {
    const {className, short} = props;
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    const languageLabel = short ? t('langShort') : t('langLong');

    return (
        <Button
            variant={BtnVariant.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {languageLabel}
        </Button>
    );
});
