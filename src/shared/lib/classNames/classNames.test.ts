import { classNames } from "./classNames";



describe("className", () => {
    test("with only first param", () => {
        expect(classNames("className")).toBe("className");
    });

    test("with additional classes", () => {
        const expectedClass = "className class1 class2";
        expect(classNames("className", {}, ["class1", "class2"])).toBe(expectedClass);
    });

    test("with mods", () => {
        const expectedClass = "className hover scrollable";
        expect(classNames("className", {hover: true, scrollable: true}, [])).toBe(expectedClass);
    });

    test("with mods false", () => {
        const expectedClass = "className hover";
        expect(classNames("className", {hover: true, scrollable: false}, [])).toBe(expectedClass);
    });

    test("with mods undefined", () => {
        const expectedClass = "className hover";
        expect(classNames("className", {hover: true, scrollable: undefined}, []))
            .toBe(expectedClass);
    });
});