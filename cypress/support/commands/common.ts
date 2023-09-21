import { User } from '../../../src/entities/User/model/types/userSchema';
import { USER_DATA_KEY } from '../../../src/shared/const/localstorage';

export const login = (username: string = 'test', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username, password
        },
    }).then(({body}) => {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(body));
        return body;
    });
};

export const selectByTestId = (id: string) => cy.get(`[data-testid="${id}"]`);


declare global {
    namespace Cypress {
      interface Chainable {
        login(email?: string, password?: string): Chainable<User>
        selectByTestId(id: string): Chainable<JQuery<HTMLElement>>
      }
    }
  }