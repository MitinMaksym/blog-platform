import { screen} from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar',() => {
 
    test('Test render', () => {
        componentRender(<Sidebar/>,{route: '/'});
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
 
    test('Collapsed sidebar', () => {
        componentRender(<Sidebar/>,{route: '/'});
        const toggleBtn = screen.getByTestId('toggle-btn');
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

});