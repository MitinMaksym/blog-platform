import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { ProfileError } from '../../consts/consts';
import { updateProfileData } from './updateProfileData';


jest.mock('axios');

describe('updateProfileData', () => {
    const profileData: Profile = {
        id:'1',
        first:'First Name', 
        lastname:'Last Name', 
        username:'Nickname', 
        age: 25, 
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        country: Country.UKRAINE,
        currency: Currency.EUR
    };

    test('should update profile data', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ProfileError[]>(
            updateProfileData, 
            {
                profile:{form: profileData}
            }
        );

        thunk.api.put.mockReturnValue(Promise.resolve({data: profileData}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual(profileData);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ProfileError[]>(
            updateProfileData, 
            {
                profile:{form:profileData}
            }
        );

        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual([ProfileError.SERVER_ERROR]);
    });

    test('validation error', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ProfileError[]>(
            updateProfileData, 
            {
                profile:{form: {...profileData, username: undefined}}
            }
        );

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.payload).toEqual([ProfileError.INCORRECT_USER_DATA]);
    });
});