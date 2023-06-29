import { FC, memo, useCallback } from 'react';
import { A11y } from 'swiper';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { Article } from 'entities/Article';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { articleRecommendationsReducer, 
    articleRecommendationsSelectors } from '../../model/slice/articleRecommendationsSlice';
import { fetchArticleRecommendations } 
    from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

// Import Swiper styles
import 'swiper/scss';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
   className?: string;
}

const reducers: ReducersList = {
    aricleRecommendations: articleRecommendationsReducer
};

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const { t } = useTranslation('article-details');

    const articles = useSelector(articleRecommendationsSelectors.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    const renderSlide = useCallback((article: Article) => 
        (<SwiperSlide key={article.id}>
            <ArticleListItem 
                article={article} 
                view='GRID'
                target="_blank"/>
        </SwiperSlide>), 
    []);

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
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
                    {articles.map(renderSlide)}
                </Swiper>
            </div>
        </DynamicReducerLoader>
    );
});