import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleImageBlock as ArticleImageBlockType} from '../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
   className?: string;
   block: ArticleImageBlockType
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
    const { className, block } = props;
    const { title, src} = block;

    return (
        <div className={classNames(cls.articleImageBlock, {}, [className])}>
            <img className={cls.image} src={src} alt={title}/>
            { title && <Text className={cls.title} text={title} align='center'/>}
        </div>
    );
});