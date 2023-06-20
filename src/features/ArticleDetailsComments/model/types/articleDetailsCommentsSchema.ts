import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    text?: string
    loading: boolean
    error?: string    
}