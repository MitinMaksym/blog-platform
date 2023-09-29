import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}

interface RateProfileArg {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const apiWithTag = rtkApi.enhanceEndpoints({ addTagTypes: ['ProfileRating'] });

const profileRatingApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Array<Rating>, GetProfileRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                method: 'GET',
                params: {
                    profileId,
                    userId,
                },
            }),
            providesTags: ['ProfileRating'],
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (paylod) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: paylod,
            }),
            invalidatesTags: ['ProfileRating'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProfileRatingQuery, useRateProfileMutation } = profileRatingApi;
