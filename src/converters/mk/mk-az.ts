import { Text } from "types";

export const mkAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, mkLatnRules + latnAzRules);
};
