import { Profile } from 'entities/Profile';
import { ProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    loading: boolean
    errors?: Array<ProfileError>
    editMode: boolean
}