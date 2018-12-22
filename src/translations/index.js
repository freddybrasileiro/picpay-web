import generalTranslate from "translations/general";
import ptBR, { ptBRFormats } from "translations/pt-BR";

export const formats = {
  "pt-BR": ptBRFormats
};

export default {
  "pt-BR": {
    ...generalTranslate,
    ...ptBR
  }
};
