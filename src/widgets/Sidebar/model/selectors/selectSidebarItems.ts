import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const selectSidebarItems = createSelector(selectUserAuthData, (userData) => {
    const sidebarItemsList:Array<SidebarItemType> =  [
        {Icon: AboutIcon, path: RoutePath.about, text: 'about-page-link'},
        {Icon: MainIcon, path: RoutePath.main, text: 'main-page-link'},
    ];

    if(userData){
        sidebarItemsList.push(        
            {Icon: ProfileIcon, path: RoutePath.profile + userData.id, text: 'profile-page-link', authOnly: true},
            {Icon: ArticlesIcon, path: RoutePath.articles, text: 'articles-page-link', authOnly: true }
        );
    }

    return sidebarItemsList;
});