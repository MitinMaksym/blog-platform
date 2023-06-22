import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {ArticleView} from 'entities/Article';
import gridIcon from 'shared/assets/icons/grid.svg';
import listIcon from 'shared/assets/icons/list.svg';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon/Icon';

import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
   view:ArticleView
   className?: string
   onToggleView: (view: ArticleView) => void
}

interface ViewType  {
   type: ArticleView
   icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const viewTypes: Array<ViewType> = [
    {
        type: 'GRID',
        icon: gridIcon
    },
    {
        type: 'LIST',
        icon: listIcon
    }
];

export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo((props) => {
    const { className, view, onToggleView } = props;

    const handleViewToggle = (view: ArticleView) => () => onToggleView(view);

    return (
        <div className={classNames(cls.articleViewSwitcher, {}, [className])}>
            {viewTypes.map(({icon, type}) => 
                <Button 
                    key={type}
                    variant={BtnVariant.CLEAR} 
                    onClick={handleViewToggle(type)}>
                    <Icon className={classNames(cls.icon, {[cls.selected]: view === type}, [])} SVG={icon}/>
                </Button>)}
        </div>
    );
});