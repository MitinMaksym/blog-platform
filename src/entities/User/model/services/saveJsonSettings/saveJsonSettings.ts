import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectJsonSettings } from '../../../selectors/selectJsonSettings/selectJsonSettings';
import { selectUserAuthData } from '../../../selectors/selectUserAuthData/selectUserAuthData';
import { JsonSettings } from '../../types/jsonSettings';
import { updateJsonSettingsMutation } from '../../../api/userApi';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'entities/user/saveJsonSettings',
    async (newSettings, { rejectWithValue, dispatch, getState }) => {
        const userData = selectUserAuthData(getState());
        const currentSettings = selectJsonSettings(getState());

        if (!userData) return rejectWithValue('not authenticated');
        try {
            const { jsonSettings } = await dispatch(
                updateJsonSettingsMutation({ settings: { ...currentSettings, ...newSettings }, userId: userData.id }),
            ).unwrap();

            if (!jsonSettings) return rejectWithValue('no json settings data');

            return jsonSettings;
        } catch (error) {
            return rejectWithValue('failed to save json settigs');
        }
    },
);
