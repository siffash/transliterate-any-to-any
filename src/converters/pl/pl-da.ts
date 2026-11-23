import { Text } from "types";

export const plDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, plLatnRules + latnDaRules);
};
