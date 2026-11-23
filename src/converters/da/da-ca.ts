import { Text } from "types";

export const daCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  return convertText(text, daLatnRules + latnCaRules);
};
