import { Text } from "types";

export const sqEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, sqLatnRules + latnEnRules);
};
