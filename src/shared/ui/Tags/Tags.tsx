import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tags.module.scss';

export interface TagItem<T extends string> {
   value:T
   content: string
}

interface TagsProps<T extends string> {
   value: T
   items: Array<TagItem<T>>
   className?: string;
   onChange: (value: T) => void
}

export const Tags = <T extends string>(props: TagsProps<T>) => {
    const { items, value, className, onChange } = props;
    const handleChange = useCallback((val: T) => () => {
        onChange(val);
    }, [onChange]);

    return (
        <div className={classNames(cls.tags, {}, [className])} >
            {items.map((item) => 
                <div  
                    key={item.value} 
                    className={classNames(cls.tag, {[cls.selected]: item.value === value}, [])} 
                    onClick={handleChange(item.value)}>
                    {item.content}
                </div>)
            }
        </div>
    );
};