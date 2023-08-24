import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import {  ReactNode } from 'react';
import { I18nextProvider} from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nConfig from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const componentRender = (Component: ReactNode, options: ComponentRenderOptions)  => 
    render(
        <StoreProvider initialState={options.initialState as StateSchema} asyncReducers={options.asyncReducers}>
            <MemoryRouter initialEntries={[options?.route || '']}>
                <I18nextProvider i18n={i18nConfig}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>);

