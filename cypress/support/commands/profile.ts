export const updateProfile = (firstname: string, lastname: string, age: number) => {
    cy.selectByTestId('EditableProfileCardButtons.EditButton').click();
    cy.selectByTestId('ProfileCard.Firstname').clear().type(firstname);
    cy.selectByTestId('ProfileCard.Lastname').clear().type(lastname);
    cy.selectByTestId('ProfileCard.UserAge').clear().type(String(age));
    cy.selectByTestId('EditableProfileCardButtons.SaveButton').click();
};

export const resetProfile = (id: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${id}`,
        body: {
            'id': '3',
            'first': 'Testname',
            'lastname': 'TestLastname',
            'age': 30,
            'currency': 'EUR',
            'country': 'Ukraine',
            'city': 'Kharkiv',
            'username': 'test',
            'avatar': 'https://thumbs.dreamstime.com/b/hacker-picture-computer-44924794.jpg'
        },
        headers: {
            Authorization: 'Bearer'
        }
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname: string, lastname: string, age: number): Chainable<void>
        resetProfile(id: string): Chainable<void>
      }
    }
  }