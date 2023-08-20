import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Array<Article>, void>({
            query: () => ({url: '/articles', params: {
                _limit: 5,
            }}),
        }),
    }),
    overrideExisting: false,
});

export const {useGetArticleRecommendationsQuery} = articleRecommendationsApi;