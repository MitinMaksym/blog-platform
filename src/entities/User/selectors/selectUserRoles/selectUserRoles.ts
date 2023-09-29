import { StateSchema } from '@/app/providers/StoreProvider';

export const selectUserRoles = (state: StateSchema) => state.user.authData?.roles || [];
