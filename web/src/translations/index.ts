import { customLanguageMap } from '../custom/translations';

import { en as enCustom } from '../custom/translations/en';
import { en } from './en';

import { pt as ptCustom } from '../custom/translations/pt';
import { pt } from './pt';

export type LangType = typeof en;

export const languageMap = {
    default: en,
    en: { ...en, ...enCustom },
    pt: { ...pt, ...ptCustom },
    ...customLanguageMap,
};
