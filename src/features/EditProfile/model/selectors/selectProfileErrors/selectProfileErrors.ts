import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileErrors = (state: StateSchema) => state.profile?.errors;
