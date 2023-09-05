import { FC, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface BugButtoProps {
    className?: string;
}

export const BugButton: FC<BugButtoProps> = ({ className }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if(error) throw new Error('test error');
    },[error]);
    return (
        <Button className={classNames('', {}, [className])} onClick={() => setError(true)}>
            {/* eslint-disable  */}
            Test Error
        </Button>
    );
};