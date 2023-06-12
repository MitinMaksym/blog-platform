import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
   className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleCodeBlock, {}, [className])}>
            <Text title='ArticleCodeBlock'/>
        </div>
    );
});