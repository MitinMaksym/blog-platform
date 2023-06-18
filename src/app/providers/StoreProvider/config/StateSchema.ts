import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditProfile';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema


