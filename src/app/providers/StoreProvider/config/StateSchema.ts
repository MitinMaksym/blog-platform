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
}

export type StateSchemaKey = keyof StateSchema


