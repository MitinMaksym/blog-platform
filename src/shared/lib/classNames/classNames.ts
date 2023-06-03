export type Mods = Record<string, boolean | string | undefined>
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([c]) => c),
        ...additional.filter((value) => value !== 'undefined' && !!value),
    ].join(' ');
}
