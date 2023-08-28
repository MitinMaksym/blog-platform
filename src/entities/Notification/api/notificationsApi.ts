import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Array<Notification>, void>({
            query: () => ({url: '/notifications'}),
        }),
    }),
    overrideExisting: false,
});

export const { useGetNotificationsQuery } = notificationsApi;