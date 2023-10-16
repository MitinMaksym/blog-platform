import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeatureFlags = (newFlags?: FeatureFlags) => {
    if (newFlags) featureFlags = newFlags;
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => featureFlags?.[flag];
