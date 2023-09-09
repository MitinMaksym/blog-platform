import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/selectCounterValue/selectCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const {increment, decrement} = useCounterActions();
    const value = useCounterValue();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };
   
    return <>
        <h1 data-testid = "value-title">{value}</h1>
        <Button data-testid = "increment-btn" onClick={handleInc}>+</Button>
        <Button data-testid = "decrement-btn" onClick={handleDec}>-</Button>
    </>;
};
    
