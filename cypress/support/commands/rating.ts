export const setRate = (rate: number, feedback: string) => {
    cy.selectByTestId(`StarRating.${rate}`).click();
    cy.selectByTestId('RatingCard.Input').clear().type(feedback);
    cy.selectByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, feedback: string): Chainable<void>;
        }
    }
}
