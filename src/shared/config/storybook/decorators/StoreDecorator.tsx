import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditProfile/model/slice/profileSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';


const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>>  = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
    
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => 
    (Story: StoryFn) => <StoreProvider initialState={state as StateSchema} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <Story />
    </StoreProvider>;