import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import { selectArticleDetailsData } from '../selectArticleDetailsData/selectArticleDetailsData';

export const selectArticleDetailsCanEdit = createSelector(
    selectUserAuthData, 
    selectArticleDetailsData, 
    (userData, ariticleData) => userData?.id === ariticleData?.user.id);