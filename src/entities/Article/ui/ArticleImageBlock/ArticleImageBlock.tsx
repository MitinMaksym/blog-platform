import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
   className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlock, {}, [className])}>
            <Text title='ArticleImageBlock'/>
        </div>
    );
});