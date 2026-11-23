import { Text } from "types";

export const mkEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkAcuteRules } = await import("data/mk/mk_acute.rules");
  const { mkEnRules } = await import("data/mk/mk-en.rules");

  return convertText(text, mkAcuteRules + mkEnRules);
};
