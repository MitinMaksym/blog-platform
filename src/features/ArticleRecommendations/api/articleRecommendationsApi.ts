import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Array<Article>, number>({
            query: (limit) => ({url: '/articles', params: {
                _limit: limit,
            }}),
        }),
    }),
    overrideExisting: false,
});

export const {useGetArticleRecommendationsQuery} = articleRecommendationsApi;