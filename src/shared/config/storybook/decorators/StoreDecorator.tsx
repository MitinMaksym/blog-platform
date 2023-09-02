import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

// TODO: PUBLIC API FOR TESTS
// eslint-disable-next-line
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line
import { articleDetailsCommentsReducer } from 
    '@/features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice';
// eslint-disable-next-line
import { articlesFiltersReducer } from '@/features/ArticlesFilters/model/slice/articlesFiltersSlice';
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line
import { profileReducer } from '@/features/EditProfile/model/slice/profileSlice';
// eslint-disable-next-line
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { pageReducer } from '@/widgets/Page';


const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>>  = {
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
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => 
    (Story: StoryFn) => <StoreProvider initialState={state as StateSchema} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <Story />
    </StoreProvider>;