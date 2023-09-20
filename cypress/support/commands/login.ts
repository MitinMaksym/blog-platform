import { USER_DATA_KEY } from '../../../src/shared/const/localstorage';

export const login = (username: string, password: string) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username, password
        },
    }).then(({body}) => {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(body));
    });
};