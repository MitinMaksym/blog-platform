import { Profile } from '@/entities/Profile';
import { ProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile): Array<ProfileError> => {
    if (!profile) return [ProfileError.NO_DATA];
    const { first, lastname, username, age, country } = profile;
    const errors = [];

    if (!first || !lastname || !username) errors.push(ProfileError.INCORRECT_USER_DATA);
    if (!age || age > 100 || age < 10) errors.push(ProfileError.INCORRECT_AGE);
    if (!country) errors.push(ProfileError.INCORRECT_COUNTRY);

    return errors;
};
