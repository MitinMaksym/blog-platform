import { StateSchema } from 'app/providers/StoreProvider';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';


interface CounterProps {

}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const value = useSelector<StateSchema>(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
   
    return <>
        <h1 data-testid = "value-title">{value}</h1>
        <Button data-testid = "increment-btn" onClick={increment}>+</Button>
        <Button data-testid = "decrement-btn" onClick={decrement}>-</Button>
    </>;
};
    
