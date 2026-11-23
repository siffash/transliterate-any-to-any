import { Text } from "types";

export const daNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, daLatnRules + latnNoRules);
};
