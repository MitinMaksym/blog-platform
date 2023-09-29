import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { fetchProfileData } from './fetchProfileData';
import { ProfileError } from '../../consts/consts';

jest.mock('axios');

describe('fetchProfileData', () => {
    const profileData = {
        first: 'First Name',
        lastname: 'Last Name',
        username: 'Nickname',
        age: 25,
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        country: Country.UKRAINE,
        currency: Currency.EUR,
    };

    test('should load profile data', async () => {
        const thunk = new TestAsyncThunk<Profile, string, ProfileError[]>(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(profileData);
    });

    test('with error', async () => {
        const thunk = new TestAsyncThunk<Profile, string, ProfileError[]>(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual([ProfileError.SERVER_ERROR]);
    });
});
