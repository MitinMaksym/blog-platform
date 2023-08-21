import { FC, memo, useCallback } from 'react';
import { A11y } from 'swiper';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Article } from 'entities/Article';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { HStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import { useGetArticleRecommendationsQuery } from '../../api/articleRecommendationsApi';

// Import Swiper styles
import 'swiper/scss';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
   className?: string;
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { data: articles, isLoading } = useGetArticleRecommendationsQuery(5, {
        skip: __PROJECT__ === 'storybook',
    });
    const renderSlide = useCallback((article: Article) => 
        (<SwiperSlide key={article.id}>
            <ArticleListItem 
                article={article} 
                view='GRID'
                target="_blank"/>
        </SwiperSlide>), 
    []);
    
    if (isLoading) return (
        <HStack justify="center" align="center">
            <Loader />
        </HStack>
    );

    return (
        <div className={classNames(cls.articleRecommendations, {}, [className])}>
            <Text title={t('recommendations')} className={cls.title}/>
            <Swiper
                modules={[A11y]}
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {!!articles?.length && articles.map(renderSlide)}
            </Swiper>
        </div>
    );
});