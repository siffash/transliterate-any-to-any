import { Text } from "types";

export const mkMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, mkLatnRules + latnMtRules);
};
