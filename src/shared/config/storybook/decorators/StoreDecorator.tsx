import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleDetailsCommentsReducer } from '@/features/ArticleDetailsComments/testing';
import { articlesFiltersReducer } from '@/features/ArticlesFilters/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/EditProfile/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { pageReducer } from '@/widgets/Page/testing';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';


const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    page: pageReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlesPage: articlesPageReducer,
    articlesFilters: articlesFiltersReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducers?: ReducersList
) => 
    (Story: StoryFn) => <StoreProvider initialState={state as StateSchema} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <Story />
    </StoreProvider>;