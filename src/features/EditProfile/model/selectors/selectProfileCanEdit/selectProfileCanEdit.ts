import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { selectProfileData } from '../selectProfileData/selectProfileData';

export const selectProfileCanEdit =
    createSelector(
        selectUserAuthData,
        selectProfileData,
        (userData, profileData) => userData?.id === profileData?.id,
    ) || false;
