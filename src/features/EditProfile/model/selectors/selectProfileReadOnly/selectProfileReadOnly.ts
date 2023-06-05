import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileReadOnly = (state:StateSchema) => state.profile?.readonly;