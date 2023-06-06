
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ProfileError } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';



describe('profileSlice', () => {
    const data =  {first:'First Name', 
        lastname:'Last Name', 
        username:'Nickname', 
        age: 25, 
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        country: Country.UKRAINE,
        currency: Currency.EUR
    };
    test('setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(state as ProfileSchema, 
            profileActions.setReadOnly(true))).toEqual({readonly: true});
    });

    test('setProfileForm', () => {
        const state: DeepPartial<ProfileSchema> = {form: data};
        expect(profileReducer(state as ProfileSchema, 
            profileActions.setProfileForm({username: 'Test123'}))).toEqual({form: {...data, username: 'Test123'}});
    });

    test('cancelFormEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {...data, username: 'Test123'}, 
            data, 
            readonly: false
        };

        const newState: DeepPartial<ProfileSchema> = {
            form: data, 
            data, 
            readonly: true
        };
        expect(profileReducer(state as ProfileSchema, 
            profileActions.cancelFormEdit())).toEqual(newState);
    });

    test('updateProfileData pending state', () => {
        const state: DeepPartial<ProfileSchema> = {
            loading: false, 
            errors: [ProfileError.INCORRECT_USER_DATA]
        };
        expect(profileReducer(state as ProfileSchema, 
            updateProfileData.pending)).toEqual({loading: true, errors: undefined});
    });

    test('updateProfileData fulfilled state', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            loading: true
        };
        expect(profileReducer(state as ProfileSchema, 
            updateProfileData.fulfilled(data, ''))).toEqual({
            loading: false, errors: undefined, form:data, data, readonly: true});
    });

});