import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface AricleRecommendationsSchema extends EntityState<Article> {
    error?: string
    loading: boolean
}