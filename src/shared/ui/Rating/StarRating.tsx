import { FC, memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';

import cls from './StarRating.module.scss';


interface StarRatingProps {
   rating?: number
   className?: string
   disabled?: boolean
   onSelect: (rating: number) => void
}

const ratings = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo(({rating = 0, className, disabled = false, onSelect}) => {
    const [currentRating, setCurrentRating] = useState(rating);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [hover, {handleMouseEnter, handleMouseLeave}] = useHover();

    const handleRatingChange = (value: number) => () => {
        if (!currentRating) {
            setCurrentRating(value);
            onSelect(value);
        }
    };

    const mouseEnterHandler = (value: number) => () => {
        if(!currentRating) {
            handleMouseEnter();
            setHoverRating(value);
        }  
    };

    useEffect(() => {
        setCurrentRating(rating);
    }, [rating]);

    return (
        <div className={classNames(cls.starRating, {[cls.disabled]: disabled}, [className])}>
            <div
                className={cls.active}
                style={{ width: `${(!currentRating && hover ? hoverRating : currentRating )/ 0.05}%` }}
            />
            <HStack className={cls.items}>
                {ratings.map((rating) => (
                    <input
                        key={rating}
                        type="radio"
                        disabled={disabled || !!currentRating}
                        className={cls.item}
                        name="rating"
                        onChange={handleRatingChange(rating)}
                        onMouseEnter={mouseEnterHandler(rating)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </HStack>
        </div>
    );
});