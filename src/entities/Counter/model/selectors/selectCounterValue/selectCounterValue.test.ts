import { StateSchema } from '@/app/providers/StoreProvider';
import { selectCounterValue } from './selectCounterValue';

describe('selectCounterValue', () => {
    test('should return counter state', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
        expect(selectCounterValue(state as StateSchema)).toEqual(10);
    });
});
