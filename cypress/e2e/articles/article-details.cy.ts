let articleId = '';

describe('User visits Article Details page', () => {

    beforeEach(() => {
        cy.login();
        cy.createArticle().then(body => {
            articleId = body.id;
            cy.visit(`/articles/${articleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });
    
    it('and sees article\'s content', () => {
        cy.selectByTestId('ArticleDetails.Info').should('exist');
        cy.selectByTestId('ArticleDetails.Header').should('have.html', 'Test');
        cy.selectByTestId('ArticleDetails.Paragraph').should('have.html', 'Test subtitle');

    });

    it('and see list of recommendations', () => {
        cy.selectByTestId('ArticleRecommendationsList').should('exist');
        cy.selectByTestId('ArticleRecommendationsItem').should('have.length.at.least', 5);
    });

    it('and leaves a comment', () => {
        cy.selectByTestId('ArticleDetails.Info');
        cy.selectByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.selectByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('and rates an article', () => {
        cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'});
        cy.selectByTestId('ArticleDetails.Info');
        cy.selectByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'Cool');
        cy.get('[data-selected="true"]').should('have.length', 4);
        
    });
});