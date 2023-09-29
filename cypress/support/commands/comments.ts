export const addComment = (text: string) => {
    cy.selectByTestId('AddCommentForm.Input').clear().type(text);
    cy.selectByTestId('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
      interface Chainable {
        addComment(text: string): Chainable<void>
      }
    }
  }