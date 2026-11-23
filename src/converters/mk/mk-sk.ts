import { Text } from "types";

export const mkSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, mkLatnRules + latnSkRules);
};
