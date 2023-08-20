import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ArticleDetailsCommentsSchema } from 'features/ArticleDetailsComments';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditProfile';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { PageSchema } from 'widgets/Page';
import { rtkApi } from '../../../../shared/api/rtkApi';
import { ArticlesFiltersSchema } from '../../../../features/ArticlesFilters/model/types/articleFiltersSchema';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    page: PageSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    articlesPage?: ArticlesPageSchema
    articlesFilters?: ArticlesFiltersSchema
}

export type StateSchemaKey = keyof StateSchema


