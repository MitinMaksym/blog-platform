import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
// import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    // const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <div>
            <Text title={t('articles-page-title')}/>
        </div>
    );
};

export default memo(ArticlesPage);