import { Text } from "types";

export const mkIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, mkLatnRules + latnIsRules);
};
