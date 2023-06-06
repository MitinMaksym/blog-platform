import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileError } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    const data = {
        first:'First Name', 
        lastname:'Last Name', 
        username:'Nickname', 
        age: 25, 
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        country: Country.UKRAINE,
        currency: Currency.EUR
    };

    test('successful validation', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('without firstName and lastName', () => {
        expect(validateProfileData({...data, first:'', lastname:''}))
            .toEqual([ProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        expect(validateProfileData({...data, age: undefined})).toEqual([ProfileError.INCORRECT_AGE]);
        expect(validateProfileData({...data, age: 0})).toEqual([ProfileError.INCORRECT_AGE]);
        expect(validateProfileData({...data, age: 101})).toEqual([ProfileError.INCORRECT_AGE]);
        expect(validateProfileData({...data, age: -5})).toEqual([ProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        expect(validateProfileData({...data, country: undefined})).toEqual([ProfileError.INCORRECT_COUNTRY]);
    });

    test('all values incorrect', () => {
        expect(validateProfileData({})).toEqual([
            ProfileError.INCORRECT_USER_DATA,
            ProfileError.INCORRECT_AGE, 
            ProfileError.INCORRECT_COUNTRY, 
        ]);
    });



});