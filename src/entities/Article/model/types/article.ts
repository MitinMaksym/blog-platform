import { User } from '@/entities/User';
import { SortOrder } from '@/shared/types';

type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export type ArticlesSortField = 'views' | 'createdAt' | 'title'

interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type:'TEXT',
    title: string
    paragraphs: Array<string>
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type:'CODE',
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type:'IMAGE',
    title: string
    src: string
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS' | 'POLITICS' | 'SPORT' | 'ALL'

export type ArticleView = 'LIST' | 'GRID' 

export interface ArticlesFilters {
    search: string
    order: SortOrder
    sort: ArticlesSortField
    type: ArticleType
}

export interface Article {
    id: string
    title: string
    subtitle: string
    user: User
    img: string
    views: number
    createdAt: string,
    type: Array<ArticleType>,
    blocks: Array<ArticleBlock>
}
