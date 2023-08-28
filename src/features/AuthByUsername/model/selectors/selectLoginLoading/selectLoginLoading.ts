import { StateSchema } from '@/app/providers/StoreProvider';

export const selectLoginLoading = (state:StateSchema) => state?.loginForm?.loading || false;