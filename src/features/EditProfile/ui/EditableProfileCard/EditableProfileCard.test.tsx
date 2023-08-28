import { screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { userReducer } from '@/entities/User';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profileData = { 
    id: '1',
    first:'First Name', 
    lastname:'Last Name', 
    username:'Nickname', 
    age: 25, 
    country: Country.UKRAINE,
    currency: Currency.EUR
};

describe('EditablePfofileCard',() => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, {
            initialState: {
                profile: { data: profileData, form: profileData, loading: false, editMode: false },
                user: { authData: { id: '1' } },
            },
            asyncReducers:{profile: profileReducer, user: userReducer}
        });
    });

    test('Test render', () => {
        expect(screen.getByTestId('EditableProfileCard')).toBeInTheDocument();
    });
 

    test('Toggle edit mode', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        expect(screen.getByTestId('EditableProfileCardButtons.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardButtons.SaveButton')).toBeInTheDocument();    
    });

    test('Edit mode cancelling and values resetting', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('test');
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.CancelButton'));
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(profileData.first);
    });

    test('Icorrect user data error', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.SaveButton'));
        
        expect(screen.getByTestId('EditableProfileCard.Error.Header')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Icorrect age error', async () => {
        // Age input is empty
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.UserAge'));
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Header')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();

        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.CancelButton'));
        
        // Greater than allowed age
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.UserAge'));
        await userEvent.type(screen.getByTestId('ProfileCard.UserAge'), '101');
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();

        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.CancelButton'));

        // Less than allowed age
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.UserAge'));
        await userEvent.type(screen.getByTestId('ProfileCard.UserAge'), '9');
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Send PUT request if form is valid', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test');
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('test');
        await userEvent.click(screen.getByTestId('EditableProfileCardButtons.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });


});