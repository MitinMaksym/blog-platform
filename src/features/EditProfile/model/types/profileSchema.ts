import { Profile } from 'entities/Profile';

export enum ProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY'
}
export interface ProfileSchema {
    data?: Profile
    form?: Profile
    loading: boolean
    errors?: Array<ProfileError>
    editMode: boolean
}