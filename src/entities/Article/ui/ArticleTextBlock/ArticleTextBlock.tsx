import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
   className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleTextBlock, {}, [className])}>
            <Text title='ArticleTextBlock'/>

        </div>
    );
});