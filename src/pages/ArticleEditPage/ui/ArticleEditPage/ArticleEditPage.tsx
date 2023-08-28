import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props;
    const {id} = useParams<{id: string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            {id ? <Text title='Article Edit Page'/> : <Text title='Article Create Page'/>}
        </Page>
    );
});

export default ArticleEditPage;