import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditProfile/model/slice/profileSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';


const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>>  = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlesPage: articlesPageReducer
    
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => 
    (Story: StoryFn) => <StoreProvider initialState={state as StateSchema} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <Story />
    </StoreProvider>;