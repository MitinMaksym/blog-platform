import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditProfile';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema


