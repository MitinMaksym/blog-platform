import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    it('Open Main page', () => {
        cy.visit('/');
        cy.get(selectByTestId('MainPage')).should('exist');
    });

    describe('Not authorized user', () => {
        it('Should open Main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Should open NotFound Page', () => {
            cy.visit('/unknown-url123');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Authorized user', () => {
        it('Should display Profile page', () => {
            cy.login('admin', '123');
            cy.visit('profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Should display Ariticles List page', () => {
            cy.login('admin', '123');
            // cy.visit('/articles')
            // cy.get(selectByTestId('ArticlesPage')).should('exist')
        });
    });
});
