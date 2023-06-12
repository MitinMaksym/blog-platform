import { Article } from './article';

export interface ArticleDetailsSchema {
    loading: boolean
    error?: string
    data?: Article
}