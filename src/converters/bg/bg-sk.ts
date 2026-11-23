import { Text } from "types";

export const bgSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, bgSchwaRules + bgLatnRules + latnSkRules);
};
