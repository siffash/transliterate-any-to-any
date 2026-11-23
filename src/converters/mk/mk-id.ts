import { Text } from "types";

export const mkId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, mkLatnRules + latnIdRules);
};
