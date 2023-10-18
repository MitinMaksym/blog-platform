import { getFeatureFlag } from './setGetFeatures';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>) {
    if (getFeatureFlag(name) || __PROJECT__ === 'storybook') {
        return on();
    }

    return off();
}
