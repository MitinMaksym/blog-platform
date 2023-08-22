import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../model/consts/user.const';
import { selectUserRoles } from '../selectUserRoles/selectUserRoles';

export const selectIsUserManager = createSelector(selectUserRoles, (roles) => roles.includes(UserRole.MANAGER));