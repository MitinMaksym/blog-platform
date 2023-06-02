import { StateSchema } from 'app/providers/StoreProvider';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { selectCounterValue } from '../model/selectors/selectCounterValue/selectCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector<StateSchema>(selectCounterValue);

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
    
