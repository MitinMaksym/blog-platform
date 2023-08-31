import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const apiWithTag = rtkApi.enhanceEndpoints({addTagTypes: ['ArticleRating']});

const articleRatingApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Array<Rating>, GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                method: 'GET',
                params: {
                    articleId,
                    userId,
                },
            }),
            providesTags: ['ArticleRating'],

        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (paylod) => ({
                url: '/article-ratings',
                method: 'POST',
                body: paylod
            }),
            invalidatesTags:['ArticleRating']
        }),
    
    }),
    overrideExisting: false,
});

export const {useGetArticleRatingQuery, useRateArticleMutation} = articleRatingApi;
