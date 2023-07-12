import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock as ArticleCodeBlockType} from '../../model/types/article';

interface ArticleCodeBlockProps {
   className?: string;
   block: ArticleCodeBlockType
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
    const { className, block } = props;


    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code}/>
        </div>
    );
});