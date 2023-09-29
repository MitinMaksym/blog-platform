let profileId = '';

describe('Profile editing functionality', () => {
    beforeEach(() => {
        cy.login().then(({ id }) => {
            cy.visit(`/profile/${id}`);
            profileId = id;
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Should display user profile', () => {
        cy.selectByTestId('ProfileCard.Firstname').should('have.value', 'Testname');
        cy.selectByTestId('ProfileCard.Lastname').should('have.value', 'TestLastname');
        cy.selectByTestId('ProfileCard.UserAge').should('have.value', 30);
    });

    it('Should edit profile', () => {
        const firstname = 'Den';
        const lastname = 'Abramov';
        const age = 35;
        cy.updateProfile('Den', 'Abramov', age);
        cy.selectByTestId('ProfileCard.Firstname').should('have.value', firstname);
        cy.selectByTestId('ProfileCard.Lastname').should('have.value', lastname);
        cy.selectByTestId('ProfileCard.UserAge').should('have.value', age);
    });
});
