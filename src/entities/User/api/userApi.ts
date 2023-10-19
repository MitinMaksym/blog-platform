import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/userSchema';
import { rtkApi } from '@/shared/api/rtkApi';

interface UpdateJsonSettingsArg {
    userId: string;
    settings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateJsonSettings: build.mutation<User, UpdateJsonSettingsArg>({
            query: ({ userId, settings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings: settings,
                },
            }),
        }),
    }),
});

export const updateJsonSettingsMutation = userApi.endpoints.updateJsonSettings.initiate;
