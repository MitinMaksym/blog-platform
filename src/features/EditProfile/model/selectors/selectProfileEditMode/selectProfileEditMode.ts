import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileEditMode = (state:StateSchema) => state.profile?.editMode || false;