import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
// import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    //  const { className } = props;
    const { t } = useTranslation();

    return (
        <div>
            <Text title={t('article-details-page-title')}/>
        </div>
    );
};

export default memo(ArticleDetailsPage);