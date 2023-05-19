import { render } from "@testing-library/react";
import {  ReactNode } from "react";
import { I18nextProvider} from "react-i18next";
import i18nConfig from "shared/config/i18n/i18nForTests";

export const renderWithTranslation = (Component: ReactNode)  => 
    render(<I18nextProvider i18n={i18nConfig}>{Component}</I18nextProvider>);