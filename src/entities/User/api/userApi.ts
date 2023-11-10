import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/userSchema';
import { rtkApi } from '@/shared/api/rtkApi';

interface UpdateJsonSettingsArg {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateJsonSettings: build.mutation<User, UpdateJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const updateJsonSettingsMutation = userApi.endpoints.updateJsonSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
