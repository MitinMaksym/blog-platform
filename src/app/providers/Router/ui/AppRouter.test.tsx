import { screen } from '@testing-library/react';
import { routes } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { AppRouter } from '..';
import { UserRole } from '@/entities/User';

describe('App Router', () => {
    test('Component should render', async () => {
        componentRender(<AppRouter />, { route: routes.about() });
        const aboutPage = await screen.findByTestId('About');
        expect(aboutPage).toBeInTheDocument();
    });

    test('Should render NotFoundPage', async () => {
        componentRender(<AppRouter />, { route: '/unknown-url' });
        const notFoundPage = await screen.findByTestId('NotFoundPage');
        expect(notFoundPage).toBeInTheDocument();
    });

    test('Should redirect to Main page if user is unauthorized', async () => {
        componentRender(<AppRouter />, {
            route: routes.profile('1'),
            initialState: { user: { authData: undefined } },
        });
        const mainPage = await screen.findByTestId('MainPage');
        expect(mainPage).toBeInTheDocument();
    });

    test('Should redirect to Profile page if user is authorized', async () => {
        componentRender(<AppRouter />, {
            route: routes.profile('1'),
            initialState: { user: { authData: {} } },
        });
        const profilePage = await screen.findByTestId('ProfilePage');
        expect(profilePage).toBeInTheDocument();
    });

    test("Should redirect to Forbidden page if a user doesn't have an Admin role", async () => {
        componentRender(<AppRouter />, {
            route: routes.admin(),
            initialState: { user: { authData: { roles: [] } } },
        });
        const forbiddenPage = await screen.findByTestId('ForbiddenPage');
        expect(forbiddenPage).toBeInTheDocument();
    });

    test('Should grant an access to a Admin page', async () => {
        componentRender(<AppRouter />, {
            route: routes.admin(),
            initialState: { user: { authData: { roles: [UserRole.ADMIN] } } },
        });
        const adminPage = await screen.findByTestId('AdminPage');
        expect(adminPage).toBeInTheDocument();
    });
});
