import { JsonSettings } from '../../model/types/jsonSettings';
import { buildSelector } from '@/shared/lib/store';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, selectJsonSettings] = buildSelector(
    (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
