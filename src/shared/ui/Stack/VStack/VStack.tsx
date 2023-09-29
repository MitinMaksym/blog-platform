import { FlexProps, Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => <Flex direction='column' {...props} />;
