import { screen} from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from './Sidebar';

describe("Sidebar",() => {
 
    test("Test render", () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
 
    test("Collapsed sidebar", () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId("toggle-btn");
        toggleBtn.click();
        expect(screen.getByTestId("sidebar")).toHaveClass('collapsed');
    });

});