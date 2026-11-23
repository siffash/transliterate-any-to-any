import { Text } from "types";

export const skNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, skLatnRules + latnNoRules);
};
