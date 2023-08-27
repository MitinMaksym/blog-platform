import popupCls from './Popup.module.scss';

export type PopupDirection = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'bottomCenter'

export const directionClasses: Record<PopupDirection, string> = {
    'bottomLeft': popupCls.directionBottomLeft,
    'bottomRight': popupCls.directionBottomRight,
    'topLeft': popupCls.directionTopLeft,
    'topRight': popupCls.directionTopRight,
    'bottomCenter': popupCls.bottomCenter
};