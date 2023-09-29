import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { UserRole } from '@/entities/User';
import { AppRoutes, routes } from '@/shared/const/router';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: Array<UserRole>;
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: routes.main(),
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: routes.about(),
        element: <AboutPage />,
    },

    [AppRoutes.PROFILE]: {
        path: routes.profile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLES]: {
        path: routes.articles(),
        element: <ArticlesPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_DETAILS]: {
        path: routes.articleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_EDIT]: {
        path: routes.articleEdit(':id'),
        element: <ArticlesEditPage />,
        authOnly: true,
    },

    [AppRoutes.ARTICLE_CREATE]: {
        path: routes.articleCreate(),
        element: <ArticlesEditPage />,
        authOnly: true,
    },

    [AppRoutes.ADMIN]: {
        path: routes.admin(),
        element: <AdminPanelPage />,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        authOnly: true,
    },

    [AppRoutes.FORBIDDEN]: {
        path: routes.forbidden(),
        element: <ForbiddenPage />,
        authOnly: true,
    },

    [AppRoutes.NOT_FOUND]: {
        path: routes.notFound(),
        element: <NotFoundPage />,
    },
};
