import { Profile } from 'entities/Profile';

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    loading: boolean
    error?: string
    readonly: boolean
}