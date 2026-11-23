import { Text } from "types";

export const skTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, skLatnRules + latnTrRules);
};
