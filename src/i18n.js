import { addLocaleData } from "react-intl";
import pt from "react-intl/locale-data/pt";

import messages, { formats } from "translations";

addLocaleData([...pt]);

export const DEFAULT_LOCALE = "pt-BR";
export const appLocales = ["en-US", "pt-BR"];
export const translationFormats = formats;
export const translationMessages = messages;
