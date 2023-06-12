
type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'


interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

interface ArticleTextBlock extends ArticleBlockBase {
    type:'TEXT',
    title: string
    paragraphs: Array<string>
}

interface ArticleCodeBlock extends ArticleBlockBase {
    type:'CODE',
    code: string
}

interface ArticleImageBlock extends ArticleBlockBase {
    type:'IMAGE',
    title: string
    src: string
}

type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export type ArticleType = 'IT' | 'SCIENCE'

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string,
    type: Array<Article>,
    blocks: Array<ArticleBlock>
}
