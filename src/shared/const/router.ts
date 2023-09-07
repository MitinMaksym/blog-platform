export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    ARTICLE_EDIT = 'articleEdit',
    ARTICLE_CREATE = 'articleCreate',
    ADMIN = 'admin',
    NOT_FOUND = 'notFound',
    FORBIDDEN = 'forbidden'
  }

export const routes = {
    [AppRoutes.MAIN]: () => '/',
    [AppRoutes.ABOUT]: () => '/about',
    [AppRoutes.PROFILE]: (id: string) => `/profile/${id}`,
    [AppRoutes.ARTICLES]: () => '/articles',
    [AppRoutes.ARTICLE_DETAILS]: (id:string) => `/articles/${id}`,
    [AppRoutes.ARTICLE_CREATE]: () => '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: (id:string) => `/articles/${id}/edit`,
    [AppRoutes.ADMIN]: () => '/admin',
    [AppRoutes.FORBIDDEN]: () => '/forbidden',
    [AppRoutes.NOT_FOUND]: () => '*',
};
  