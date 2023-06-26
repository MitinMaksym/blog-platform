import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ArticleDetailsCommentsSchema } from 'features/ArticleDetailsComments';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditProfile';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { PageSchema } from 'widgets/Page';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    page: PageSchema

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema


