import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 
    '@/features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice';
import { articlesFiltersReducer } from '@/features/ArticlesFilters/model/slice/articlesFiltersSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/EditProfile/model/slice/profileSlice';
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