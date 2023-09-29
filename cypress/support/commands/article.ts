import { Article } from '../../../src/entities/Article/model/types/article';

const defaultArticle = {
    id: '22',
    title: 'Test',
    subtitle: 'Test subtitle',
    userId: '1',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2023',
    type: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: ['«Hello, world!»,'],
        }
    ],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        body: article ?? defaultArticle,
        headers: {
            Authorization: 'Bearer'
        }
    }).then(({body}) => body);
};

export const removeArticle = (id: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${id}`,
        headers: {
            Authorization: 'Bearer'
        }
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(): Chainable<Article>
        removeArticle(id: string): Chainable<void>
      }
    }
  }