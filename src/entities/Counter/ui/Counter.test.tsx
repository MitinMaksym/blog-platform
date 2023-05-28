import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from '..';

describe('Counter',() => {
    test('Render Counter value', () => {
        componentRender(<Counter/>, { initialState:{counter:{value:10}}});
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');     
    });

    test('increment', () => {
        componentRender(<Counter/>, { initialState:{counter:{value:10}}});
        screen.getByTestId('increment-btn').click();
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');     
    });
    
    test('decrement', () => {
        componentRender(<Counter/>, { initialState:{counter:{value:10}}});
        screen.getByTestId('decrement-btn').click();
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');     
    });
});
