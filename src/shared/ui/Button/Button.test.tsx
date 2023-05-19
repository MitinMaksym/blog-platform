
import {render, screen} from "@testing-library/react";
import { BtnVariant, Button } from "./Button";


describe("Button",() => {
    test("Test render", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();     
    });

    test("Clear variant", () => {
        render(<Button variant={BtnVariant.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
     
    });
});

