import { screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar',() => {
 
    test('Test render', () => {
        componentRender(<Sidebar/>,{route: '/'});
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
 
    test('Collapsed sidebar', async () => {
        componentRender(<Sidebar/>,{route: '/'});
        await userEvent.click(screen.getByTestId('toggle-btn'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

});