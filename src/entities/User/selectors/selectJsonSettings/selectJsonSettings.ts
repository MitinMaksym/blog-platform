import { buildSelector } from '@/shared/lib/store';

export const [useJsonSettings, selectJsonSettings] = buildSelector((state) => state.user.authData?.jsonSettings ?? {});
