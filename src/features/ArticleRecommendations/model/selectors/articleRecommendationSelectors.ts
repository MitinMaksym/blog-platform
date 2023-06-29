import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleRecommendationsError = (state: StateSchema) => state.aricleRecommendations?.error;
export const selectArticleRecommendationsLoading = (state: StateSchema) => state.aricleRecommendations?.loading;