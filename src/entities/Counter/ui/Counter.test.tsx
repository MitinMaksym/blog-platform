import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter, counterReducer } from '..';


describe('Counter',() => {
    beforeEach(() => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
            asyncReducers: { counter: counterReducer },
        });
    });
    test('Render Counter value', () => {
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');     
    });

    test('Increment', async () => {
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');     
    });
    
    test('Decrement', async () => {
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');     
    });
});
