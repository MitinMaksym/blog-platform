import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue, selectCounterValue] = buildSelector((state) => state.counter.value);
