import { removeArticle } from '../../support/commands/article';

const { _ } = Cypress;

let articleId = '';

describe('User visits Articles page', () => {

    beforeEach(() => {
        cy.login().visit('/articles');
    });

    afterEach(() => {
        if(articleId) {
            removeArticle(articleId);
            articleId = '';
        }
    });

    it('and articles are displayed successfully', () => {
        cy.selectByTestId('ArticleList').should('exist');
        cy.selectByTestId('ArticleListItem').should('have.length.at.least', 3);
    });

    it('and articles are displayed successfully (with stubs)', () => {
        cy.intercept('GET', '**/articles?*', {fixture: 'articles-list.json'});
        cy.selectByTestId('ArticleList').should('exist');
        cy.selectByTestId('ArticleListItem').should('have.length.at.least', 3);
    });

    it('and tries to search article by article name', () => {
        cy.createArticle().then((body) => {
            articleId = body.id;
        });
        cy.selectByTestId('ArticlesFilters.SearchInput').clear().type('Test');
        cy.contains('[data-testid="ArticleListItem.Header"]', 'Test').should('have.length', 1);       
    });


    it('and tries to sort by view in descending order', () => { 
        cy.selectByTestId('ArticlesSortSelect.Button').click();
        cy.selectByTestId('ListboxOption.views').click();
        cy.selectByTestId('ArticlesOrderSelect.Button').click();
        cy.selectByTestId('ListboxOption.desc').click();
        cy.selectByTestId('ArticleListItem.Views').then((items) => {
            const views = _.map(items, (el) => el.innerText);
            const sorted = _.orderBy(views.map(Number),undefined, 'desc').toString();
            expect(views.toString()).eq(sorted.toString());
        });
    });

    it('and selects articles with Politics tag', () => {
        const tag = 'POLITICS'; 
        cy.selectByTestId(`Tag.${tag}`).click();
        cy.selectByTestId('ArticleListItem.Tags').then(items => {
            const tags = _.map(items, (el) => el.innerText);
            expect(tags.every(t => t.includes(tag))).eq(true);
        });
    });
});