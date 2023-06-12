import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article';

import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
   className?: string;
   block: ArticleTextBlockType
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
    const { className, block } = props;
    const {title, paragraphs} = block;

    return (
        <div className={classNames(cls.articleTextBlock, {}, [className])}>
            {title && <Text className={cls.title} title={title} size="sizeM"/>}
            {paragraphs.map(paragraph => <Text key={paragraph} className={cls.paragraph} text={paragraph}/>)}
        </div>
    );
});