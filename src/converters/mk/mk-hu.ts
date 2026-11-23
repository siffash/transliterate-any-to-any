import { Text } from "types";

export const mkHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, mkLatnRules + latnHuRules);
};
