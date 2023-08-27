import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
    element?: Element
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.querySelector('#storybook-root') || document.body,
    } = props;
    return createPortal(children, element);
};