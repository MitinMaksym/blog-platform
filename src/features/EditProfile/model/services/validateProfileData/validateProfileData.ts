import { Profile } from 'entities/Profile';
import { ProfileValidationError } from '../../types/profileSchema';

export const validateProfileData = (profile?: Profile):Array<ProfileValidationError> => {
    if(!profile) return [ProfileValidationError.NO_DATA];
    const {first, lastname, username, age, country} = profile;
    const errors = [];
  
    if(!first || !lastname || !username) errors.push(ProfileValidationError.INCORRECT_USER_DATA);
    if(!age || age > 100) errors.push(ProfileValidationError.INCORRECT_AGE);
    if(!country) errors.push(ProfileValidationError.INCORRECT_COUNTRY);

    return errors;
};